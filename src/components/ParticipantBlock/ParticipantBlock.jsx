// @flow
import 'bootstrap/dist/css/bootstrap-grid.css';
import type {Props, State} from './flow';
import React, {Component} from 'react';
import 'styles/styles.less';
import BattleButton from 'components/BattleButton';
import styles from './ParticipantBlock.less';
import {connect} from 'react-redux';

export class ParticipantBlock extends Component<Props, State> {
	props: Props;
	state: State;

	handleSelect = () => {

	};

	render () {
		const {listParticipants} = this.props;
		return (
			<div className={styles.participantRow}>
				<input className={styles.participantNumber} type="text" name=""/>
				<select name="" className={styles.participantName} onChange={this.handleSelect}>
					<option hidden value="0"></option>
					{
						listParticipants.map((item, index) => <option key={index} value={item.number}>{item.name}</option> )
					}
				</select>
				<label className="score">0</label>
				<BattleButton content="+" />
				<BattleButton content="-" />
				<BattleButton content="Победитель" />
				<p className={styles.participantInfo}>
					возраст: <span className="age" />,
					кю: <span className="dan" />,
					вес: <span className="weight" />кг,
					клуб: <span className="trainer"/>
				</p>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	listParticipants: state.app.listParticipants
});

export default connect(mapStateToProps)(ParticipantBlock);
