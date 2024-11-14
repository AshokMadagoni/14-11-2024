// symmetric matrix or not

let matrix=[[1,2,3],[4,5,6],[7,5,8]];
reverse=[]
issymmetric=true
for(i=0;i<matrix.length;i++){
    subarr=[]
    for(j=0;j<matrix.length;j++){
        subarr.push(matrix[j][i])
    }
    reverse.push(subarr)
    for(k=0;k<matrix.length;k++){
        if(matrix[i][k]!==reverse[i][k]){
            issymmetric=false;
            break;
        }
        
    }
}
if(issymmetric){
    console.log("symmetric matrix")
}
else{
    console.log("not symmetric matrix")
}


// rotate matrix 90degrees

let matrix1=[[1,2,3],[4,5,6],[7,8,9]];
reverse=[]
for(let i=0;i<matrix1.length;i++){
    subarr=[]
    for(let j=0;j<matrix1.length;j++){
        subarr[j]= matrix1[j][i]
    }
    reverse.push(subarr.reverse())
}
console.log(reverse)

//Matrix multiplication

let mat1=[[1,4,7],[2,5,8],[3,6,9]]
let mat2=[[1,2],[1,2],[1,2]]
final=[]
for(i=0;i<mat2.length;i++){
    let subsum= [];
    for(j=0;j<mat2[0].length;j++){
        sum=0
      for (let k = 0; k < mat2.length; k++) {
            sum += mat1[i][k] * mat2[i][j];
        }subsum.push(sum);
    }
    final.push(subsum)
}
console.log(final)