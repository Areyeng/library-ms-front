import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, cx }) => ({
    card: css`
      border: 1px solid grey;
      width:1000px;
      top:300px;
      
     `,
    content: css`
      display: flex;
    `,
    imageContainer: css`
      flex: 0 0 auto;
      margin-right: 20px;
    `,
    detailsContainer: css`
      flex: 1;
    `,
      icon: css`
      flex: 1;
    `,
    description: css`
      width:300px;
    `,

    status: css`
      
      width: 250px;
      height: 250px;
      border: 1px solid grey;
      top:40px;
      left: 700px;
    `,
    availability: css`
      color: green;
      margin-left:40px;
    `,
    request: css`
     width 50px;
     height:50px;
     background-color: green;
     opacity: 0.7;
     border-radius: 5px;
     margin-top:30px; 
    `,
    order: css`
     color:white;
     text-align:center;
     margin-left: 50px;
     font-weight:bold;
    `,
    bookmark: css`
    width 50px;
     height:50px;
     background-color: grey;
     opacity: 0.7;
     border-radius: 5px;
     margin-top:10px; 
    `

}));
