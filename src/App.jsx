import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Zap, Wrench, Shield, Phone, Mail, MapPin, Star, CheckCircle, Users, Clock, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'

// Import das imagens
import heroImage from './assets/hero-electrician.jpg'
import electricalPanelImage from './assets/electrical-panel.jpg'
import maintenanceImage from './assets/panel-maintenance.jpg'
import servicesImage from './assets/professional-services.jpg'
import erPrimusLogo from './assets/er-primus-logo.png'

function App() {
  const services = [
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Instalações Elétricas",
      description: "Instalações elétricas residenciais, comerciais e industriais com total segurança e qualidade.",
      features: ["Projetos elétricos", "Instalação de tomadas", "Iluminação LED", "Quadros de distribuição"]
    },
    {
      icon: <Wrench className="h-8 w-8 text-blue-600" />,
      title: "Manutenção Elétrica",
      description: "Manutenção preventiva e corretiva para garantir o funcionamento perfeito do seu sistema elétrico.",
      features: ["Manutenção preventiva", "Reparo de falhas", "Troca de componentes", "Inspeção técnica"]
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Montagem de Quadros",
      description: "Montagem e instalação de quadros elétricos seguindo todas as normas de segurança.",
      features: ["Quadros residenciais", "Quadros comerciais", "Automação", "Proteção elétrica"]
    }
  ]

  const stats = [
    { icon: <Users className="h-6 w-6" />, number: "500+", label: "Clientes Atendidos" },
    { icon: <CheckCircle className="h-6 w-6" />, number: "1000+", label: "Projetos Concluídos" },
    { icon: <Clock className="h-6 w-6" />, number: "24h", label: "Atendimento Emergencial" },
    { icon: <Award className="h-6 w-6" />, number: "10+", label: "Anos de Experiência" }
  ]

  const testimonials = [
    {
      name: "João Silva",
      role: "Proprietário Residencial",
      content: "Excelente serviço! A equipe da ER Primus foi muito profissional e resolveu todos os problemas elétricos da minha casa.",
      rating: 5
    },
    {
      name: "Maria Santos",
      role: "Gerente Comercial",
      content: "Contratamos a ER Primus para a instalação elétrica completa do nosso escritório. Trabalho impecável e dentro do prazo!",
      rating: 5
    },
    {
      name: "Carlos Oliveira",
      role: "Engenheiro",
      content: "Profissionais altamente qualificados. Recomendo a ER Primus para qualquer tipo de serviço elétrico.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <img src={erPrimusLogo} alt="ER Primus Logo" className="h-full w-full object-contain" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ER Primus</h1>
                <p className="text-xs text-gray-600">Serviços Elétricos</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">Início</a>
              <a href="#servicos" className="text-gray-700 hover:text-blue-600 transition-colors">Serviços</a>
              <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors">Sobre</a>
              <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Phone className="h-4 w-4 mr-2" />
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-yellow-500 text-black mb-4">Profissionais Especializados</Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Soluções Elétricas
                <span className="text-yellow-400"> Profissionais</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Instalações, manutenção e montagem de quadros com segurança e qualidade. 
                Atendemos residências, comércios e indústrias com excelência.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  <Zap className="h-5 w-5 mr-2" />
                  Solicitar Orçamento
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                  <Phone className="h-5 w-5 mr-2" />
                  Emergência 24h
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img 
                src={heroImage} 
                alt="Eletricista profissional trabalhando" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Certificado</p>
                    <p className="text-sm text-gray-600">Normas Técnicas</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="bg-blue-100 text-blue-800 mb-4">Nossos Serviços</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Especialistas em Soluções Elétricas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços elétricos para atender todas as suas necessidades
              com segurança e qualidade garantida.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="bg-yellow-100 text-yellow-800 mb-4">Nossos Trabalhos</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Projetos Realizados
            </h2>
            <p className="text-xl text-gray-600">
              Confira alguns dos nossos trabalhos realizados com excelência
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative group overflow-hidden rounded-xl"
            >
              <img 
                src={electricalPanelImage} 
                alt="Instalação de painel elétrico" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Instalação de Painel</h3>
                  <p className="text-sm">Projeto Residencial</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative group overflow-hidden rounded-xl"
            >
              <img 
                src={maintenanceImage} 
                alt="Manutenção elétrica" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Manutenção Preventiva</h3>
                  <p className="text-sm">Projeto Comercial</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative group overflow-hidden rounded-xl"
            >
              <img 
                src={servicesImage} 
                alt="Serviços profissionais" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Instalação Completa</h3>
                  <p className="text-sm">Projeto Industrial</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="bg-green-100 text-green-800 mb-4">Depoimentos</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600">
              A satisfação dos nossos clientes é nossa maior recompensa
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-blue-100 text-blue-800 mb-4">Sobre a ER Primus</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Profissionais especializados em soluções elétricas
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                A ER Primus é uma empresa especializada em serviços elétricos, oferecendo soluções 
                completas para residências, comércios e indústrias. Nossa equipe é formada por 
                profissionais altamente qualificados e certificados.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Profissionais certificados e experientes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Atendimento 24 horas para emergências</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Garantia em todos os serviços realizados</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Orçamento gratuito e sem compromisso</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <Zap className="h-8 w-8 text-yellow-500 mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Instalações</h3>
                    <p className="text-sm text-gray-600">Projetos elétricos completos</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <Shield className="h-8 w-8 text-green-500 mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Segurança</h3>
                    <p className="text-sm text-gray-600">Normas técnicas rigorosas</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <Wrench className="h-8 w-8 text-blue-500 mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Manutenção</h3>
                    <p className="text-sm text-gray-600">Preventiva e corretiva</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <Clock className="h-8 w-8 text-purple-500 mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Emergência</h3>
                    <p className="text-sm text-gray-600">Atendimento 24 horas</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="bg-yellow-500 text-black mb-4">Entre em Contato</Badge>
            <h2 className="text-4xl font-bold mb-4">
              Solicite seu orçamento gratuito
            </h2>
            <p className="text-xl text-gray-300">
              Estamos prontos para atender suas necessidades elétricas
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6">Fale conosco</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Telefone</p>
                    <p className="text-gray-300">(11) 99999-9999</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">E-mail</p>
                    <p className="text-gray-300">contato@erprimus.com.br</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Localização</p>
                    <p className="text-gray-300">São Paulo, SP</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-900 rounded-xl">
                <h4 className="font-semibold mb-2">Atendimento 24 horas</h4>
                <p className="text-blue-200 text-sm">
                  Para emergências elétricas, estamos disponíveis 24 horas por dia, 7 dias por semana.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-white text-gray-900">
                <CardHeader>
                  <CardTitle>Solicitar Orçamento</CardTitle>
                  <CardDescription>
                    Preencha o formulário e entraremos em contato em breve
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome completo</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefone</label>
                    <input 
                      type="tel" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">E-mail</label>
                    <input 
                      type="email" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Serviço desejado</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Selecione um serviço</option>
                      <option>Instalação Elétrica</option>
                      <option>Manutenção Elétrica</option>
                      <option>Montagem de Quadros</option>
                      <option>Emergência</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Mensagem</label>
                    <textarea 
                      rows="4" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Descreva seu projeto ou necessidade"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Zap className="h-4 w-4 mr-2" />
                    Enviar Solicitação
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                  <img src={erPrimusLogo} alt="ER Primus Logo" className="h-full w-full object-contain" />
                </div>
                <div>
                  <h3 className="font-bold">ER Primus</h3>
                  <p className="text-xs text-gray-400">Serviços Elétricos</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Profissionais especializados em soluções elétricas para residências, comércios e indústrias.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Instalações Elétricas</li>
                <li>Manutenção Elétrica</li>
                <li>Montagem de Quadros</li>
                <li>Emergência 24h</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>(11) 99999-9999</li>
                <li>contato@erprimus.com.br</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <p className="text-sm text-gray-400 mb-2">
                Siga-nos no Instagram:
              </p>
              <a href="https://www.instagram.com/er_primus/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
                @er_primus
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 ER Primus Serviços Elétricos. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

