let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr);

for(let i = 0;i<arr.length;i++){
    console.log(arr[i])
}


arr.forEach(function(element)
{
console.log(element);
})



let j=0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}

let k =0;
do{
    console.log(arr[k]);
    k++;
}while (k<arr.length);


let arr1 = [1,2,3,4,5,6,7,8,9,10];
for(let i = 0;i<arr1.length;i++){
    if(i==2){
        // break;
        continue;
    }
    console.log(arr[i])
}