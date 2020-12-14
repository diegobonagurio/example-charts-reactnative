import React from 'react'
import { Grid, ProgressCircle, LineChart, YAxis } from 'react-native-svg-charts'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {data, dataLinearChart} from '../../helpers/data';

function Home() {
	const contentInset = { top: 20, bottom: 20 }

	const {navigate} = useNavigation();
	return(
    <View style={styles.container}>
			<View style={{ height: 200, flexDirection: 'row' }}>
				<YAxis
					data={dataLinearChart}
					contentInset={contentInset}
					svg={{
							fill: 'grey',
							fontSize: 10,
					}}
					numberOfTicks={10}
					formatLabel={(value) => `R$${value}`}
				/>
				<LineChart
					style={{ flex: 1, marginLeft: 16 }}
					data={data}
					svg={{ stroke: '#7159c1' }}
					contentInset={contentInset}
				>
					<Grid />
				</LineChart>
			</View>
			
				<View style={styles.containerCircle}>
					<Text style={styles.textCircle}>50%</Text>
				</View>

				<ProgressCircle 
					style={{ height: 200 }} 
					progress={0.5} 
					progressColor={'rgb(134, 65, 244)'} 
				/>		

				<TouchableOpacity
					onPress={() => navigate('report')}
					activeOpacity={0.75}
					style={styles.buttonDiv}
        >
          <Text style={styles.buttonText}>Ver relatorio completo</Text>
        </TouchableOpacity>
    </View>
	);
}

export default Home;

const styles = StyleSheet.create({
		container: {
		backgroundColor: '#121214',
		flex: 1,
	},
	textCircle: {
		color: '#FFF',
		fontSize: 40,
	},
	containerCircle: {
		top: 120,
		alignItems: 'center',
		justifyContent: 'center',
	}, 
	buttonText: {
		color: '#121214', 
		textAlign: 'center',
		padding: 20,
		fontSize: 20,
	},
	buttonDiv: { 
		backgroundColor: '#7159c1', 
		top: 150, 
		marginLeft: 50, 
		marginRight: 50,
		borderRadius: 50,
	}
})