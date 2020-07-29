import styled from 'styled-components';
import px2vw from 'px2vw';

export const StyledProfile = styled.div`

#about{
    grid-column: 1 / -1;
    margin-top:65px;
    font-family: arya-triple-alt, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 50px;
    text-align: center;
    color: #d9fff0;
    display: flex;
    width: ${px2vw(320, 320)};
    min-height: ${px2vw(200, 320)};
    flex-direction: column;
    padding: ${px2vw(20)};
    margin: ${px2vw(20)};
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
color: #ffff;
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
    @media screen and (max-width: 480px) {
        width: 20rem;
        height 20rem;
    }
}

.sectionInner {
    margin-bottom: 5rem;
    margin-top: 5rem;
}

.splitSection{
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    margin-bottom: 5%;
   font-size: 4rem;
   @media screen and (max-width: 480px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    margin-bottom: 5rem;
    margin-top: 5rem;
}

@media screen and (max-width: 480px) {
    .linkedin {
        display: none
    }
    
}
}
`;