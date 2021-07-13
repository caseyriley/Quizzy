var jump = function(nums) { //[2,3,1,1,4]
    let numSteps = 0;
    let index = 0;
    while(index < nums.length - 1){ 
        
        let cur = nums[index]; //1
        let rArray = nums.slice(index); //[1,4]
        let jump = 0;
        if (index + cur >= nums.length) {
            console.log('return', index + cur)
            return index + cur;
            
        }
        for (let i = 1; i <= cur; i ++){
            let step = rArray[i]; 
            if (!step) break;
            let totall = step + i; 
            if (totall > jump) jump = step;   
        }
        index += jump;
        numSteps ++;
        console.log('index',index)
        console.log('jump', jump)
    }
    console.log('return', numSteps)
    return numSteps;  
};

jump([2,3,1,1,4])