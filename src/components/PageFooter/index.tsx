'use client';
import { Layout } from 'antd';
import { useStyles } from "./styles";

const { Footer } = Layout;

export default function PageFooter(): React.ReactNode {
  const { styles, cx } = useStyles();

  return (
    <Footer className={cx(styles.footer)}>
      <div className={cx(styles.content)}>
        <div className={cx(styles.address)}>
          <p><b>Address<br/></b> 146 Union Ave<br/>Lyttelton Manor<br/>Centurion<br/>0157</p>
        </div>
        <div className={cx(styles.contacts)}>
          <p><b>General enquiries</b><br/>012 358 6567<br/>emporium@enquiries.co.za</p>
        </div>
      </div>
    </Footer>
  );
}



