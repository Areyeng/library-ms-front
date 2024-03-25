import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, cx }) => ({
  footer: css`
    background-color: #C8AF86;
    color: white;
   
    height: 200px;
   
  `,
  address: css`
    width: 200px;
    line-height: 25px;
    margin-left: 50px;
  `,
  contacts: css`
    width: 200px;
    line-height: 25px;
    display: inline;
    margin-left: 50px;
  `,
  content: css`
    display: flex;
    justify-content: space-between;
    max-width: 500px;
    margin: 0 auto;
  `,
}));