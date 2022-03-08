import { ButtonPill } from '../components/Form/ButtonPill';
import { Metadata } from '../components/Metadata';
import { Navbar } from '../components/Navbar/Navbar';
import Logo from '../public/icons/icon-responsive.svg';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { SiFirebase, SiNextdotjs, SiReact, SiTypescript } from 'react-icons/si';

export default function Home() {
	return (
		<>
			<Metadata title="Mood Graph - Home" url="/" />
			<Navbar />
			<div className="flex h-[calc(100vh-8rem-2px)] items-center justify-center">
				<header className="mx-3 rounded-md bg-neutral-50 px-6 py-8 text-center shadow">
					<h1 className="mb-3 font-display text-4xl font-extrabold">
						Mood Graph
					</h1>
					<div className="mb-2">
						<Logo width={96} height={96} className="inline-block" alt="" />
					</div>
					<h2 className="mb-4 font-display font-semibold">
						A simple way to track your mental health.
					</h2>
					<ButtonPill color="bg-violet-500">
						<Link href="/login">
							<a>Get Started</a>
						</Link>
					</ButtonPill>
					<ButtonPill color="bg-sky-500">
						<Link href="#about">
							<a>Learn more</a>
						</Link>
					</ButtonPill>
				</header>
			</div>
			<div className="mx-auto mb-4 max-w-2xl rounded-t-2xl bg-neutral-50 shadow-sm shadow-neutral-800/50 md:rounded-t-lg">
				<main id="about" className="px-5 py-4">
					<h2 className="mb-3 font-display text-4xl font-extrabold">Hello!</h2>
					<p className="mb-4">
						Welcome to <strong>Mood Graph</strong>, a mood tracking web and
						Android app built by Julian Lachniet using Next.js and Firebase.
						This entire project is open source and available on{' '}
						<Link href="https://github.com/jlachniet/Mood-Graph">
							<a className="text-blue-600">GitHub</a>
						</Link>
						, and is deployed through Vercel.
					</p>
					<div className="mx-auto mb-4 w-fit rounded-md bg-neutral-200 px-4 py-3 shadow-sm shadow-black/50 transition hover:scale-[1.025]">
						<h2 className="font-display font-semibold">How it works:</h2>
						<ol className="ml-4 list-decimal">
							<li>Set up daily reminders on your device</li>
							<li>Every night, rate your day from 1 to 5</li>
							<li>Profit!</li>
						</ol>
					</div>
					<p className="mb-4 border-b border-neutral-500 pb-4">
						Interested? Start keeping track of your mental health by{' '}
						<Link href="/login">
							<a className="text-blue-600">getting started!</a>
						</Link>{' '}
						Not convinced yet? Keep reading to learn more about the project.
					</p>
					<div className="mb-4 border-b border-neutral-500 pb-4">
						<h2 className="mb-1 font-display text-2xl font-extrabold">
							Features:
						</h2>
						<ol className="ml-6 list-disc">
							<li>
								Works both online and offline as a web app and Android app.
							</li>
							<li>
								Your data is securely backed up and synced across devices.
							</li>
							<li>Completely free of charge!</li>
							<li>You can generate graph or stats about your moods.</li>
						</ol>
					</div>
					<h2 className="mb-3 font-display text-2xl font-extrabold">
						Updates:
					</h2>
					<ul className="mb-8 space-y-4">
						<li className="rounded-md bg-green-200 px-3 py-2 shadow-sm shadow-black/50 transition hover:scale-[1.0125]">
							<h3 className="font-display text-lg font-semibold">
								Release 1.1.0
							</h3>
							<ul className="ml-6 list-disc">
								<li>Major UI overhaul</li>
								<li>Added some other new features hopefully</li>
							</ul>
						</li>
						<li className="rounded-md bg-sky-200 px-3 py-2 shadow-sm shadow-black/50 transition hover:scale-[1.0125]">
							<h3 className="font-display text-lg font-semibold">
								Release 1.0.0
							</h3>
							<ul className="ml-6 list-disc">
								<li>
									Initial production release and first open source release.
								</li>
							</ul>
						</li>
					</ul>
					<h3 className="mb-1">Powered by:</h3>
					<ul className="space-x-2">
						<li className="inline-block">
							<Link href="https://nextjs.org/">
								<a>
									<SiNextdotjs className="h-6 w-6 fill-[#222]" />
								</a>
							</Link>
						</li>
						<li className="inline-block">
							<Link href="https://firebase.google.com/">
								<a>
									<SiFirebase className="h-6 w-6 fill-[#FFCA28]" />
								</a>
							</Link>
						</li>
						<li className="inline-block">
							<Link href="https://www.typescriptlang.org/">
								<a>
									<SiTypescript className="h-6 w-6 fill-[#3178C6]" />
								</a>
							</Link>
						</li>
						<li className="inline-block">
							<Link href="https://reactjs.org/">
								<a>
									<SiReact className="h-6 w-6 fill-[#61DAFB] brightness-90" />
								</a>
							</Link>
						</li>
					</ul>
				</main>
				<footer className="bg-indigo-200 p-1 text-center">
					Made with{' '}
					<BsHeartFill className="mb-[0.125rem] inline h-3 w-3 fill-fuchsia-500 drop-shadow" />{' '}
					by Julian.
				</footer>
			</div>
		</>
	);
}
