import {SuccessModel} from "../model/responseModel";
import {getDetail, getList} from "../controllers/blog";

type MessageModel = {
    [k:string]:String
}

const message:MessageModel = {
    list:'获取博客列表接口',
    detail: '获取博客详情接口'
}

export function handleBlogRoute(req, res) {
    const method = req.method

    if (method === 'GET' && req.path === '/api/blog/list') {
        //api/blog/list?author=zhangSan&keyword=123
        const author = req.query.author
        const keyword = req.query.keyword
        const listData = getList(author, keyword)
        return new SuccessModel(listData, message.list)
    }
    if (method === 'GET' && req.path === '/api/blog/detail') {
        const id = req.query.id
        const listData = getDetail(id)
        return new SuccessModel(listData, message.detail)
    }
    if (method === 'POST' && req.path === '/api/blog/new') {
        return {
            message: '新建博客列表'
        }
    }
    if (method === 'POST' && req.path === '/api/blog/update') {
        return {
            message: '更新博客列表'
        }
    }
    if (method === 'POST' && req.path === '/api/blog/delete') {
        return {
            message: '删除博客列表'
        }
    }
}
