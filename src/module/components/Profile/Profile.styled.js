import styled from 'styled-components';

export const StyledProfile = styled.div`

#about{
    height: 90vh;
    margin-top:65px;
    font-family: arya-triple-alt, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 50px;
    text-align: center;
}

#about [data-bigletter]:before{
    left: 10%;

}

.blurb {
    font-family: gill-sans-nova,sans-serif;
font-weight: 400;
font-style: normal;
font-size: 30px;
margin-left: 5vw;
margin-right: 5vw;
margin-bottom: 5vw;
margin-top: 3vw;

line-height: 1.8;
}

.img-circle{
    width: 200px;
    height: 200px;
    margin: 5vw;
    background-size: cover;
    display: block;
    border-radius: 100px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
}

.sectionInner {
    margin-bottom: 5vm;
}

.splitSection{
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    margin-bottom: 5%;
}
`;