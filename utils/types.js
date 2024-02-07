const fromChat = chat => ({
    archived: chat.archived,
    id: chat.id,
    isGroup: chat.isGroup,
    isMuted: chat.isMuted,
    isReadOnly: chat.isReadOnly,
    lastMessage: chat.lastMessage ? fromMessage(chat.lastMessage) : undefined,
    muteExpiration: chat.muteExpiration,
    name: chat.name,
    pinned: chat.pinned,
    timestamp: chat.timestamp,
    unreadCount: chat.unreadCount
})

const fromLocation = location => ({
    address: location.address,
    description: location.description,
    latitude: location.latitude,
    longitude: location.longitude,
    name: location.name,
    url: location.url
})

const fromMessage = message => ({
    body: message.body,
    ack: message.ack,
    author: message.author,
    broadcast: message.broadcast,
    deviceType: message.deviceType,
    duration: message.duration,
    forwardingScore: message.forwardingScore,
    from: message.from,
    fromMe: message.fromMe,
    hasMedia: message.hasMedia,
    hasQuotedMsg: message.hasQuotedMsg,
    hasReaction: message.hasReaction,
    id: message.id,
    inviteV4: message.inviteV4,
    isEphemeral: message.isEphemeral,
    isForwarded: message.isForwarded,
    isGif: message.isGif,
    isStarred: message.isStarred,
    isStatus: message.isStatus,
    links: message.links,
    location: message.location ? fromLocation(message.location) : undefined,
    mediaKey: message.mediaKey,
    mentionedIds: message.mentionedIds,
    orderId: message.orderId,
    rawData: message.rawData,
    timestamp: message.timestamp,
    to: message.to,
    token: message.token,
    type: message.type,
    vCards: message.vCards
})

const fromGroupNotification = groupNotification => ({
    author: groupNotification.author,
    body: groupNotification.body,
    chatId: groupNotification.chatId,
    id: groupNotification.id,
    recipientIds: groupNotification.recipientIds,
    timestamp: groupNotification.timestamp,
    type: groupNotification.type
})

module.exports = { fromChat, fromGroupNotification, fromLocation, fromMessage }