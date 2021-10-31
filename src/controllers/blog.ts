//博客相关的方法

export function getList(author, keyword) {
    return [
        {
            id: 1,
            title: '标题1',
            content: '内容1',
            author: 'zhangsan',
            createdAt: 1635676448222
        },
        {
            id: 2,
            title: '标题2',
            content: '李四',
            author: 'lisi',
            createdAt: 1635676466424
        },
    ]
}

export function getDetail(id) {
    return {
        id: 1,
        title: '标题1',
        content: '内容1',
        author: 'zhangsan',
        createdAt: 1635676448222
    }
}

export function getPostData(req){
    return  new Promise((resolve,reject)=>{
        if(req.method === 'POST') resolve({})
        if(req.headers['Content-type'] !== 'application/json') resolve({})
        let postData

    })
}