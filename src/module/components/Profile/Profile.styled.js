import styled from 'styled-components';

export const StyledProfile = styled.div`

#about{
    height: 90vh;
    margin-top:650px;
}

#about [data-bigletter]:before{
    left: 10%;
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
 
.splitSection{
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    margin-left: 5%;
}

.splitLeft {
    width: 68%;
}
	
.splitRight {
    margin-left: 5%;
	}
`;