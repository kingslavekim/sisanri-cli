export interface UserList {
    data: User[];
}

export interface User {
    id: string;
    password: string;
    email: string;
    nickName: string;
    block: boolean;
    point: number;
    createdAt: number;
}

export interface Block {
    userId: Object;
    code: string;
    fromDt: number;
    toDt: number;
    reasonCode: string;
    remark: string;
    createdAt: number;
}

export interface Report {
    userId: Object;
    pathId: Object;
    code: string;
    remark: string;
    createdAt: number;
}

export interface Point {
    userId: Object;
    pathId: Object;
    code: string;
    point: number;
    createdAt: number;
}

export interface Post {
    useage: boolean;
    writer: Object;
    categoryId: string;
    title: string;
    lookupCount : number;
    replyCount : number;
    recommendCount: number;
    opposeCount: number;
    createdAt: number;
}

export interface Reply {
    writer: Object;
    recommendCount: number;
    opposeCount: number;
    content: string;
    createdAt: number;
}

export interface UserObject {
    blockCount: number;
    blockEndDate: string;
    blockHistoryList: Block[];
    reportHistoryList: Report[];
    pointHistoryList: Point[];
    postHistory: Post[];
    replyHistory: Reply[];
}
