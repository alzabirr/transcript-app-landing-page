import { stats } from "@/data/stats"

const Stats: React.FC = () => {
    return (
        <section id="stats" className="py-6 lg:py-20">
            <div className="grid sm:grid-cols-3 gap-8">
                {stats.map(stat => (
                    <div key={stat.title} className="neu-card-soft rounded-[20px] p-7 text-center sm:text-left max-w-md sm:max-w-full mx-auto">
                        <h3 className="mb-5 flex items-center gap-2 text-3xl font-semibold justify-center text-primary sm:justify-start">
                            {stat.icon}
                            <span className="text-foreground">{stat.title}</span>
                        </h3>
                        <p className="text-foreground-accent">{stat.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stats
