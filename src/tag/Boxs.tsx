
import sorttempls from "../data/exampletemplate"
import TemplateElement from './Template'
import GridBox from '../theme/GridBox'
import Box from '../theme/Box'
import TextBox from '../theme/TextBox'
import FlexBox from '../theme/FlexBox'

function Container (){
	return(
		<GridBox bg={'0'} gridTemplateColumns={'1fr'} display={'grid'} mt={2} height={3} borderRadius={2}>
			{sorttempls[0].length>0 && <Box mt={7} ml={6} width={1} overflowY='auto'>
				<TextBox  as='h2' ml={5} mb={3} fontSize={5} lineHeight={3} color={'3'} display='inline' >Alerts</TextBox>
				<Box overflowY='auto'>
					{
						sorttempls[0].map(templ =>{
							return <TemplateElement {...templ }/>
						} )
					}
				</Box>
			</Box>}
			{sorttempls[1].length>0 && <Box  mt={7} ml={6} width={1} overflowY='auto'>	
				<FlexBox mb={6} display='flex' height={5} width={'100%'} justifyContent='space-between' alignItems='center'>
					<TextBox as='h2' ml={5} mb={3} fontSize={5} lineHeight={3} color={'3'} display={'inline'}>SMS</TextBox>
						<TextBox pt={3} fontSize={1} lineHeight={0} color={'4'} display={'inline'} >
							total: {sorttempls[1].reduce((x: any, y) =>{
							x= x + y.messageCount
							return x
						}, 0 )}</TextBox>
				</FlexBox>
				<Box overflowY='auto'>
					{
						sorttempls[1].map(templ =>{
							return <TemplateElement {...templ } key={templ.id}/>
						} )
					}
				</Box>
			</Box>}
		</GridBox>
	)
}

export default Container
