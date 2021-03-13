import Layout from './components/Layout'

const About = () => {
    return(
        <Layout>
            <style jsx>
                {
                    `h2 {
                        color: green
                    }`
                }
            </style>
            <h2>안녕하세요 저는 RielLee 입니다.</h2>
        </Layout> 
    );
}

export default About;