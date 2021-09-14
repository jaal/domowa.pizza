import Helmet from 'react-helmet';
import React from 'react';
import userConfig from '../../config';
import Layout from '../templates/layout';
import Card from '../components/Card';
import Container from '../components/Container';
import Headline from '../components/Headline';

const NotFoundPage = () => {
    return (
        <Layout>
            <Container>
                <Helmet
                    title={`${userConfig.title} | ${userConfig.author}`}
                    htmlAttributes={{ lang: 'PL' }}
                >
                    <meta
                        name="description"
                        content={`${userConfig.title} | ${userConfig.description}`}
                    />
                </Helmet>
                <Card>
                    <Headline>
                        Podana strona nie istnieje...
                    </Headline>
                </Card>
            </Container>
        </Layout>
    );
};

export default NotFoundPage;
