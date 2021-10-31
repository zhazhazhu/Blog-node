class BaseModel {
    public data:any
    public message:string
    constructor(data,message) {
        this.data = data
        this.message = message
    }
}

//成功模型
class SuccessModel extends BaseModel{
    public code:number
    constructor(data,message) {
        super(data,message);
        this.code = 0
    }
}

//失败模型
class ErrorModel extends BaseModel{
    public code:number
    constructor(data,message) {
        super(data,message);
        this.code = -1
    }
}

export {
    SuccessModel,
    ErrorModel
}