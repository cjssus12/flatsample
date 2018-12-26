//faker: 임의의 정보를만들어주는 라이브러리(구글링 gogo!).
import faker from 'faker';

//가라데이타 만듬
export const randomUsers=(count=10) =>{
    const arr=[];
    for(let i=0; i < count; i++){
        //*.push 어떤값을 업데이트
        arr.push({
            key:faker.random.uuid(), 
            name:faker.name.firstName(),
            // name1:faker.name.lastName(),
            email:faker.internet.email(),
            avatar:faker.image.avatar()
        });
    }
    return arr;
}