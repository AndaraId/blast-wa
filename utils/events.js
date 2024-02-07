const { fromChat, fromMessage, fromGroupNotification } = require("./types")
const qrcode = require('qrcode-terminal')

const authFailure = msg => { log('auth_failure', msg) }

const log = (funcName, msg) => console.log(`[${new Date().toString()} ${funcName}] ${msg}`)

const authenticated = () => log('authenticated', 'authenticated')

const changeBattery = info => log('change_battery', info)

const changeState = state => log('change_state', state)

const chatArchived = (chat, currState, prevState) => log('chat_archived', `currState ${currState} prevState ${prevState} chat ${JSON.stringify(fromChat(chat), undefined, 2)}`)

const chatRemoved = chat => log('chat_removed', `chat ${JSON.stringify(fromChat(chat), undefined, 2)}`)

const contactChanged = (message, oldId, newId, isContact) => log('contact_changed', `isContact ${isContact} newId ${newId} oldId ${oldId} message ${JSON.stringify(fromMessage(message), undefined, 2)}`)

const disconnected = reason => log('disconnected', `reason ${reason}`)

const groupAdminChanged = groupNotification => log('group_admin_changed', `groupNotification ${JSON.stringify(fromGroupNotification(groupNotification), undefined, 2)}`)

const groupJoin = groupNotification => log('group_join', `groupNotification ${JSON.stringify(fromGroupNotification(groupNotification), undefined, 2)}`)

const message = message => log('message', `message ${JSON.stringify(fromMessage(message), undefined, 2)}`)

const qr = qr => {
    log('qr', `qr ${qr}`)
    qrcode.generate(qr, { small: true })
}

const ready = () => log('ready', 'Client is ready!')

module.exports = {
    authFailure,
    authenticated,
    changeBattery,
    changeState,
    chatArchived,
    chatRemoved,
    contactChanged,
    disconnected,
    groupAdminChanged,
    groupJoin,
    log,
    message,
    qr,
    ready,
}