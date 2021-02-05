ROOM_INIT_URL = 'https://api.live.bilibili.com/xlive/web-room/v1/index/getInfoByRoom'
DANMAKU_SERVER_CONF_URL = 'https://api.live.bilibili.com/xlive/web-room/v1/index/getDanmuInfo'
DEFAULT_DANMAKU_SERVER_LIST = [
    {'host': 'broadcastlv.chat.bilibili.com', 'port': 2243, 'wss_port': 443, 'ws_port': 2244}
]

let OperationEnum={
    HANDSHAKE:0,
    HANDSHAKE_REPLY:1,
    HEARTBEAT:2,
    HEARTBEAT_REPLY:3,
    SEND_MSG:4,
    SEND_MSG_REPLY : 5,
    DISCONNECT_REPLY : 6,
    AUTH : 7,
    AUTH_REPLY : 8,
    RAW : 9,
    PROTO_READY : 10,
    PROTO_FINISH : 11,
    CHANGE_ROOM : 12,
    CHANGE_ROOM_REPLY : 13,
    REGISTER : 14,
    REGISTER_REPLY : 15,
    UNREGISTER : 16,
    UNREGISTER_REPLY : 17,
}