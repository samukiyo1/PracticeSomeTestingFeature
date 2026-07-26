const {test,expect,request}=require('@playwright/test');
const BaseURL='https://jsonplaceholder.typicode.com';
test.describe('API Practice',()=>{
    test('Get Request',async({request})=>{
        const response=await request.get(`${BaseURL}/posts/1`);
        expect(response.status()).toBe(200);
        expect(response.ok()).toBeTruthy();
    })
    test('Post Request',async({request})=>{
        const response=await request.post(`${BaseURL}/users`,{
            data:{
                name:'same',
                username:'sam123',
                email:'sam@gmail.com'
            }
        })
        expect(response.status()).toBe(201);
        expect(response.ok()).toBeTruthy();
        console.log(await response.json())
    });
    test('Put Request',async({request})=>{
        const response=await request.put(`${BaseURL}/users/1`,{
            data:{
                id:1,
                name:'same',
                username:'sam123',
                email:'sam@gmail.com'
            }
        })
        expect(response.status()).toBe(200);
    })
    test('Delete Request',async({request})=>{
        const response=await request.delete(`${BaseURL}/users/1`);
        expect(response.status()).toBe(200);
    })

})
