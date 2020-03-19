import {
    REQUEST,
    SUCCESS,
    FAILURE,
} from './constants'

/**
 * 
 * @param {*} root path of the action ex: App/auth/login
 * @param {*} prefix ex 'LOGIN_USER'
 */
export const generateActionTypes = (root, prefix) => ({
    request: `${root}${prefix}_${REQUEST}`,
    success: `${root}${prefix}_${SUCCESS}`,
    failure: `${root}${prefix}_${FAILURE}`,
})