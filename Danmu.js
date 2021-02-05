class Danmu {
    /*
    :param mode: 弹幕显示模式（滚动、顶部、底部）
    :param font_size: 字体尺寸
    :param color: 颜色
    :param timestamp: 时间戳
    :param rnd: 随机数
    :param uid_crc32: 用户ID文本的CRC32
    :param msg_type: 是否礼物弹幕（节奏风暴）
    :param bubble: 右侧评论栏气泡
    :param msg: 弹幕内容
    :param uid: 用户ID
    :param uname: 用户名
    :param admin: 是否房管
    :param vip: 是否月费老爷
    :param svip: 是否年费老爷
    :param urank: 用户身份，用来判断是否正式会员，猜测非正式会员为5000，正式会员为10000
            :param mobile_verify: 是否绑定手机
    :param uname_color: 用户名颜色
    :param medal_level: 勋章等级
    :param medal_name: 勋章名
    :param runame: 勋章房间主播名
    :param room_id: 勋章房间ID
    :param mcolor: 勋章颜色
    :param special_medal: 特殊勋章
    :param user_level: 用户等级
    :param ulevel_color: 用户等级颜色
    :param ulevel_rank: 用户等级排名，>50000时为'>50000'
            :param old_title: 旧头衔
    :param title: 头衔
    :param privilege_type: 舰队类型，0非舰队，1总督，2提督，3舰长
    */
    #mode;
    #font_size;
    #color;
    #timestamp;
    #rnd;
    #uid_crc32;
    #msg_type;
    #bubble;
    #msg;
    #uid;
    #uname;
    #admin;
    #vip;
    #svip;
    #urank;
    #mobile_verify;
    #uname_color;
    #medal_level;
    #medal_name;
    #runame;
    #room_id;
    #mcolor;
    #special_medal;
    #user_level;
    #ulevel_color;
    #ulevel_rank;
    #old_title;
    #title;
    #privilege_type

    constructor(mode, font_size, color, timestamp, rnd, uid_crc32, msg_type, bubble, msg, uid, uname, admin, vip, svip, urank, mobile_verify, uname_color, medal_level, medal_name, runame, room_id, mcolor, special_medal, user_level, ulevel_color, ulevel_rank, old_title, title, privilege_type) {
        this.#mode = mode;
        this.#font_size = font_size;
        this.#color = color;
        this.#timestamp = timestamp;
        this.#rnd = rnd;
        this.#uid_crc32 = uid_crc32;
        this.#msg_type = msg_type;
        this.#bubble = bubble;
        this.#msg = msg;
        this.#uid = uid;
        this.#uname = uname;
        this.#admin = admin;
        this.#vip = vip;
        this.#svip = svip;
        this.#urank = urank;
        this.#mobile_verify = mobile_verify;
        this.#uname_color = uname_color;
        this.#medal_level = medal_level;
        this.#medal_name = medal_name;
        this.#runame = runame;
        this.#room_id = room_id;
        this.#mcolor = mcolor;
        this.#special_medal = special_medal;
        this.#user_level = user_level;
        this.#ulevel_color = ulevel_color;
        this.#ulevel_rank = ulevel_rank;
        this.#old_title = old_title;
        this.#title = title;
        this.#privilege_type = privilege_type;
    }
}