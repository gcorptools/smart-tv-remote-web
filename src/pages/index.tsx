import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { Button, Empty } from 'antd';
import Router from 'next/router';
import { CLIENT_ROUTES } from '@/constants';

const Home = () => {
  return (
    <>
      <Head>
        <title>Smart TV Remote</title>
        <meta name='description' content='Control your Smart TV from here' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <Empty
          description={
            <>
              <p>Get started by setting your Smart TV configuration</p>
              <Button
                type='primary'
                onClick={() => Router.push(CLIENT_ROUTES.connect)}
              >
                Configure
              </Button>
            </>
          }
        ></Empty>
      </main>
    </>
  );
};

export default Home;
