var arr = [3,2,5,4,6,0,7,1];
function insertSort(arr){
    var len = arr.length,value, i,j;
    for(i=0;i<len;i++){
        value = arr[i];
        for(j=i-1;j>-1&&arr[j]>value;j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = value;
    }
    return arr;
}
console.log(insertSort(arr));
