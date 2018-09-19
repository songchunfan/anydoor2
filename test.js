/* 移动猎豹前端面试题 */
(function (object) {
    console.log(object.name);

    const fighter = object;
    object.hair = "Unknown";
    const { hair, ...infos } = fighter;

    console.log(hair);
    console.log(typeof infos);
    console.log(infos);
})({
    hair: 'Blonde',
    name: 'Leo',
    style: 'Baji-Quan',
    nationality: 'Germany'
})

const f = x => y => z => {
    let result = 0;

    t(x)(i => result += y);

    return result * z;
};
const t = n => f => {
    let x = i => {
        if (i === n) return;
        f(i);
        x(i + 1);
    }
    return x(0);
};
f(2)(3)(4);

const arr = [10,20,30];

for(let i = 0; i<arr.length;i++){
    void setTimeout(_ => {
        console.log(arr[i])//10,20,30
    },0);
}
for(var i = 0; i<arr.length;i++){
    void setTimeout(_ => {
        console.log(arr[i])//undefined,undefined,undefined
    },0);
}