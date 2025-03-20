export function Dashboard() {
	return (
		<div className="dashboard">
			<header className="dashboard__header">
				<h1>Dashboard</h1>
			</header>
			<section className="dashboard__stats">
				<div className="stat-card">
					<h2>Users</h2>
					<p>1,234</p>
				</div>
				<div className="stat-card">
					<h2>Revenue</h2>
					<p>$56,789</p>
				</div>
				<div className="stat-card">
					<h2>Orders</h2>
					<p>456</p>
				</div>
			</section>
			<section className="dashboard__chart">
				<h2>Performance</h2>
				<div className="chart-placeholder">[Chart Placeholder]</div>
			</section>
		</div>
	)
}
