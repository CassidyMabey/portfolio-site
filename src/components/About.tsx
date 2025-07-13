import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Rocket, Users, Bug } from 'lucide-react';

export const About = () => {
  const skills = [
    {
      icon: Code,
      title: 'Custom Applications',
      description: 'I can build custom web apps, desktop tools, and automations for your needs.',
      color: 'text-blue-400'
    },
    {
      icon: Rocket,
      title: 'Minecraft & Game Plugins',
      description: 'I develop Minecraft Java plugins, Discord bots, and game-related utilities.',
      color: 'text-green-400'
    },
    {
      icon: Bug,
      title: 'Malware Debugging',
      description: 'I analyze, debug, and reverse engineer malware and suspicious programs for fun and learning.',
      color: 'text-purple-400'
    },
    {
      icon: Users,
      title: 'Problem Solving',
      description: 'I love debugging, reverse engineering, and finding creative solutions to tricky problems.',
      color: 'text-orange-400'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a 17-year-old self-taught developer who loves programming. <br></br>
            I work with a range of languages and different applications like Minecraft Java plugins, Chrome Extensions, and Discord development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Started as a lazy teenager who wanted to automate everything, Now I can build a range of applications from web applications using React or Minecraft plugins using Java or Kotlin.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, i'm probably asking AI random questions, dissasembing and reassembling broken objects, 
              or taking my dog on a walk.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Java', 'HTML', 'CSS', 'Javascript', 'C', 'Kotlin', 'Node.js', 'Electron.js'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="glass rounded-2xl p-8 hover-glow">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">7+</div>
                <div className="text-muted-foreground mb-4">Fluent Languages</div>
                <div className="text-4xl font-bold gradient-text mb-2">1000+</div>
                <div className="text-muted-foreground mb-4">Hours Of Programming</div>
                <div className="text-4xl font-bold gradient-text mb-2">5+</div>
                <div className="text-muted-foreground">Years Programming</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="project-card hover-glow">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <skill.icon className={`h-12 w-12 mx-auto ${skill.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};