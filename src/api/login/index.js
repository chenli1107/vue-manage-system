import request from '@/utils/request';

export function login(data) {
    return request({
        url: '/auth/loginMg/login',
        method: 'POST',
        data: data
    });
}