import styled, {injectGlobal} from 'styled-components'

const globals = injectGlobal`
	* {
		font-family: Raleway, serif;
		font-weight: normal;
	}
	
	.fa {
	  margin-right: 10px;
	}
`

export const RightContentDiv = styled.div`
	padding: 20px;
	
	p {
		font-family: Lato, serif;
	}
`

export default globals;