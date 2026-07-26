import {test, expect,request} from '@playwright/test';
const BaseURL='https://jsonplaceholder.typicode.com';
test.describe('API Practice',async()=>{
    test('Get Request',async({request})=>{
        const response=await request.get(`${BaseURL}/users/1`)
        const responseBody=await response.json();
        console.log(await response.json());
        expect(responseBody.name).toBe('Leanne Graham');
        expect(responseBody.address.city).toBe('Gwenborough');
        expect(responseBody.address.geo.lat).toBeDefined();
        
    })
})