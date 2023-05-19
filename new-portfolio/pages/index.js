import Head from 'next/head'
import homeStyles from '../styles/Home.module.css'
import Typist from 'react-typing-animation'

export default function Home() {
  return (
		<div className={homeStyles.main}>
			<Head>
				<title>Ryan Spears - Home</title>
				<meta name={'Ryan Spears Portfolio Site'}></meta>
			</Head>
			<div className={homeStyles.text}>
				<Typist>
					<h1>
						var <span className={homeStyles.var}>suprise</span> = {'"'}It seems you{"'"}ve stumbled upon my portfolio...{'"'};
					</h1>
					<Typist.Delay ms={500} />
					<h1 className={homeStyles.line__2}>
						const <span className={homeStyles.var}>introduction</span> = {'"'}My name is Ryan Spears, and I{"'"}m a Software Developer from Jackson, MS.{'"'};
					</h1>
					<Typist.Delay ms={500} />
					<h1>
						let <span className={homeStyles.var}>invitation</span> = {'"'}Feel free to look around to find out more about my work.{'"'};
					</h1>
				</Typist>
			</div>
		</div>
	)
}
