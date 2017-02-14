var arr = [4,5,2,1,0,7,3,6]; 
for(var i=0;i<arr.length;i++){
    minToFirst(arr,arr.length-i);
}
function minToFirst(arr,len){
    for(var j=len;j>=1;j--){
        if(arr[j]<arr[j-1]){
            var temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
        }
    }
    return arr;
}
console.log(minToFirst(arr));

for(var i=arr.length-1;i>=0;i--){
    maxToEnd(arr,i);
}
function maxToEnd(arr,len){
    for(var j=0;j<len;j++){
        if(arr[j]>arr[j+1]){
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
    return arr;
}
console.log(maxToEnd(arr));