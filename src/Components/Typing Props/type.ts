export type Info ={
    id: number,
    name: string,
    email: string,
};

 type AdminInfo = {
    isAdmin: boolean,
    department: string


}
export type AdminInfoList = Info & AdminInfo;