import Cookies from 'js-cookie'

const TokenKey = 'Agency-Admin-Token'
const UserKey = 'Agency-Account'
const customerServiceId = 'Agency-CustomerServiceId'
const AgencyId = 'Agency-AgencyId'

export function getToken() {
  return Cookies.get(TokenKey)
}
export function getUser() {
  return Cookies.get(UserKey)
}
export function getCustomerServiceId() {
  return Cookies.get(customerServiceId)
}
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}
export function setUser(username) {
  return Cookies.set(UserKey, username)
}
export function setCustomerServiceId(id) {
  return Cookies.set(customerServiceId, id)
}
export function removeToken() {
  return Cookies.remove(TokenKey)
}
export function removeUser() {
  return Cookies.remove(UserKey)
}
export function removeCustomerServiceId() {
  return Cookies.remove(customerServiceId)
}
export function setAgencyId(agencyId) {
  return Cookies.set(AgencyId, agencyId)
}
export function getAgencyId() {
  return Cookies.get(AgencyId)
}
export function removeAgencyId() {
  return Cookies.remove(AgencyId)
}
