import request from '@/utils/request';

export function findTree() {
    return request({
        url: '/role/sysMenu/findTree',
        method: 'get'
    });
}

export function bbbb() {
    return request({
        url: '/bbbb',
        method: 'get'
    });
}
