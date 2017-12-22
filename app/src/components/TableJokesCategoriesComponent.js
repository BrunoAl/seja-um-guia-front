import React, { Component } from 'react';
import { getContentByCategoryRequest } from '../actions/chuckNorrisActions'
import { connect } from 'react-redux'
import { TableContainer, MainTable} from './TableJokesCategoriesComponentStyles'
import {
	Accordion,
	AccordionItemTitle,
	AccordionItemBody,
} from 'react-accessible-accordion'


class TableJokesCategories extends Component {

	constructor(props) {
		super(props)

		this.state = {
			currentCategory: null
		}
	}

	render() {
		if (!this.props.jokesCategories) {
			return (
				<div>
					Carregando...
				</div>
			)
		}

		return (
			<MainTable>
        <TableContainer>
					<tbody>
						{Array.isArray(this.props.jokesCategories) && this.props.jokesCategories.map(category => (
							<tr key={category}>
								<td onClick={() => {this.props.getContentByCategoryRequest(category); this.setState({ currentCategory: category})}}>
									<Accordion>
										<AccordionItemTitle>
											<h3>{category}</h3>
										</AccordionItemTitle>
											<AccordionItemBody>
												{this.props.joke && this.props.joke && this.props.joke.category && this.props.joke.category[0] === category ?
													<span>
														<img alt={"Chuck Norris face!"} src={this.props.joke.icon_url}></img>
														<p>{this.props.joke.value}</p>
													</span>
													:
													<p>{ this.state.currentCategory === category ? 'Carregando.. ' : `Click to see a ${category} joke`}</p>
												}
										</AccordionItemBody>
									</Accordion>
								</td>
							</tr>
						))}
					</tbody>
        </TableContainer>
      </MainTable>
		)
	}
}

const mapStateToProps = state => ({
	jokesCategories: state.chuckNorris.getJokesCategoriesSuccess,
	joke: state.chuckNorris.getJokeContentSuccess
})

export default connect(mapStateToProps, { getContentByCategoryRequest })(TableJokesCategories)
