import '../assets/css/footer.styl'

export default {
	data() {
		return {
			author: 'GUO'
		}
	},
	render() {
		return (
			<div id="footer">
				<span>Written by {this.author}</span>
			</div>
		)
	}
}