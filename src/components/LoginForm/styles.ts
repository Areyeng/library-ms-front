import { createStyles } from 'antd-style';
 
export const useStyles = createStyles(({ css, cx }) => ({
    
  form: css`
    padding: 200px 100px 200px 100px;
    font-weight:semi-bold;
  `,
  input: css`
    border: 2px solid grey;
  `,
  button: css`
    background-color: #C8AF86;
    width: 405px
  `,
// Override css on hover

  
}));