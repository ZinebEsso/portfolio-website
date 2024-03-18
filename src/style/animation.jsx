export const page = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: .2,
      },
    },
    
  };

  export const up = {
    hidden : {
         opacity : 0,
         // height : 0,
         y : 100,
     },
     show : {
         y : 0,
         opacity: 1,
         // height : 'auto',
         transition:{
             duration:1,
             transition:'easeOut',
         }
     }
 }