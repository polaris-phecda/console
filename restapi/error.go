package restapi

import (
	"errors"
	"log"

	"github.com/go-openapi/swag"
	"github.com/minio/console/models"
	k8sErrors "k8s.io/apimachinery/pkg/api/errors"
)

var (
	// Generic error messages
	errorGeneric               = errors.New("an error occurred, please try again")
	errInvalidCredentials      = errors.New("invalid Login")
	errorGenericInvalidSession = errors.New("invalid session")
	errorGenericUnauthorized   = errors.New("unauthorized")
	errorGenericForbidden      = errors.New("forbidden")
	errorGenericNotFound       = errors.New("not found")
	// Explicit error messages
	errorInvalidErasureCodingValue        = errors.New("invalid Erasure Coding Value")
	errorUnableToGetTenantUsage           = errors.New("unable to get tenant usage")
	errorUnableToUpdateTenantCertificates = errors.New("unable to update tenant certificates")
	errorUpdatingEncryptionConfig         = errors.New("unable to update encryption configuration")
	errBucketBodyNotInRequest             = errors.New("error bucket body not in request")
	errBucketNameNotInRequest             = errors.New("error bucket name not in request")
	errGroupBodyNotInRequest              = errors.New("error group body not in request")
	errGroupNameNotInRequest              = errors.New("error group name not in request")
	errPolicyNameNotInRequest             = errors.New("error policy name not in request")
	errPolicyBodyNotInRequest             = errors.New("error policy body not in request")
)

// prepareError receives an error object and parse it against k8sErrors, returns the right error code paired with a generic error message
func prepareError(err ...error) *models.Error {
	errorCode := int32(500)
	errorMessage := errorGeneric.Error()
	if len(err) > 0 {
		log.Print("original error: ", err[0].Error())
		if k8sErrors.IsUnauthorized(err[0]) {
			errorCode = 401
			errorMessage = errorGenericUnauthorized.Error()
		}
		if k8sErrors.IsForbidden(err[0]) {
			errorCode = 403
			errorMessage = errorGenericForbidden.Error()
		}
		if k8sErrors.IsNotFound(err[0]) {
			errorCode = 404
			errorMessage = errorGenericNotFound.Error()
		}
		if errors.Is(err[0], errInvalidCredentials) {
			errorCode = 401
			errorMessage = errInvalidCredentials.Error()
		}
		// console invalid erasure coding value
		if errors.Is(err[0], errorInvalidErasureCodingValue) {
			errorCode = 400
			errorMessage = errorInvalidErasureCodingValue.Error()
		}
		if errors.Is(err[0], errBucketBodyNotInRequest) {
			errorCode = 400
			errorMessage = errBucketBodyNotInRequest.Error()
		}
		if errors.Is(err[0], errBucketNameNotInRequest) {
			errorCode = 400
			errorMessage = errBucketNameNotInRequest.Error()
		}
		if errors.Is(err[0], errGroupBodyNotInRequest) {
			errorCode = 400
			errorMessage = errGroupBodyNotInRequest.Error()
		}
		if errors.Is(err[0], errGroupNameNotInRequest) {
			errorCode = 400
			errorMessage = errGroupNameNotInRequest.Error()
		}
		if errors.Is(err[0], errPolicyNameNotInRequest) {
			errorCode = 400
			errorMessage = errPolicyNameNotInRequest.Error()
		}
		if errors.Is(err[0], errPolicyBodyNotInRequest) {
			errorCode = 400
			errorMessage = errPolicyBodyNotInRequest.Error()
		}
		// console invalid session error
		if errors.Is(err[0], errorGenericInvalidSession) {
			errorCode = 401
			errorMessage = errorGenericInvalidSession.Error()
		}
		// if we received a second error take that as friendly message but dont override the code
		if len(err) > 1 {
			log.Print("friendly error: ", err[1].Error())
			errorMessage = err[1].Error()
		}
		// if we receive third error we just print that as debugging
		if len(err) > 2 {
			log.Print("debugging error: ", err[2].Error())
		}
	}
	return &models.Error{Code: errorCode, Message: swag.String(errorMessage)}
}
