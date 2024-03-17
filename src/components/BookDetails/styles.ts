import { createStyles } from 'antd-style';
 
export const useStyles = createStyles(({ css, cx }) => ({
 
  details: css`
    display:flex;
  `,
  card: css`
    width:1000px;
    top:100px;
    left:260px;
   
  `,
  secondCard: css `
    width:250px;
    height:250px;
    border: 1px solid grey;
    margin-top: 10px;
    margin-left:500px;
    position: absolute;
  `
}));