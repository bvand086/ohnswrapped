'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BookOpen, Users, Award, Quote, DollarSign, FileText, Globe, Star, Target, Zap, Building2 } from 'lucide-react';
import ExpandableCard from './expandable-card';

const ResearchWrapped = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <div className="max-w-4xl mx-auto w-full px-6 py-8 space-y-8">
        <motion.div 
          className="text-center text-white p-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">McMaster OHNS</h1>
          <h2 className="text-3xl font-light">Research Wrapped 2024</h2>
        </motion.div>

        {/* Top Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ExpandableCard 
            className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-lg hover:shadow-emerald-500/50 transition-shadow duration-300"
            expandedContent={
              <div className="space-y-2">
                <div className="text-sm">
                  <div className="font-bold mb-2">Funding Breakdown:</div>
                  <ul className="ml-4 space-y-4">
                    <li className="bg-white/10 p-3 rounded-lg">
                      <div className="font-semibold">$38,111 CAD</div>
                      <div className="text-xs mt-1">McMaster Surgical Associates Internal Research Grant</div>
                      <div className="text-sm mt-1 font-medium">
                        &quot;Responsiveness of a Machine-Learning Algorithm in Scoring the CAPE-V Using Non-Optimized Voice Samples&quot;
                      </div>
                      <div className="text-xs mt-1 opacity-80">
                        Applicants: Dr. Benjamin van der Woerd, Sophia Werden Abrams, Kaitlyn Hui, Anick Lamarche
                      </div>
                    </li>
                    <li className="bg-white/10 p-3 rounded-lg">
                      <div className="font-semibold">$75,000 CAD</div>
                      <div className="text-xs mt-1">McMaster Innovation Matchmaking Award</div>
                      <div className="text-sm mt-1 font-medium">
                        &quot;Soft, Magnetically Actuated Continuum Robots for ENT Surgery&quot;
                      </div>
                      <div className="text-xs mt-1 opacity-80">
                        Applicants: Dr. Onaizah Onaizah, Dr. Sarah Khalife, Dr. Benjamin van der Woerd
                      </div>
                    </li>
                    <li className="bg-white/10 p-3 rounded-lg">
                      <div className="font-semibold">$78,190.61 CAD</div>
                      <div className="text-xs mt-1">McMaster CIP Ministry of Health funding award</div>
                      <div className="text-xs mt-1 opacity-80">
                        Applicant: Dr. Phillip Staibano
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            }
          >
            <div className="text-center">
              <DollarSign className="w-12 h-12 mx-auto mb-3" />
              <div className="text-4xl font-bold mb-2">$191K</div>
              <div className="text-lg">Research Funding</div>
            </div>
          </ExpandableCard>

          <ExpandableCard 
            className="bg-gradient-to-br from-pink-600 to-purple-700 text-white shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300"
            expandedContent={
              <div className="space-y-2">
                <div className="text-sm">
                  <div className="font-bold mb-2">Publication Statistics:</div>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="bg-white/10 p-2 rounded text-center">
                      <div className="font-bold text-2xl">5</div>
                      <div>Systematic Reviews</div>
                    </div>
                    <div className="bg-white/10 p-2 rounded text-center">
                      <div className="font-bold text-2xl">3</div>
                      <div>Case Reports</div>
                    </div>
                    <div className="bg-white/10 p-2 rounded text-center">
                      <div className="font-bold text-2xl">4</div>
                      <div>Study Protocols</div>
                    </div>
                    <div className="bg-white/10 p-2 rounded text-center">
                      <div className="font-bold text-2xl">13</div>
                      <div>Original Research</div>
                    </div>
                  </div>
                </div>
              </div>
            }
          >
            <div className="text-center">
              <BookOpen className="w-12 h-12 mx-auto mb-3" />
              <div className="text-4xl font-bold mb-2">25</div>
              <div className="text-lg">Publications</div>
            </div>
          </ExpandableCard>

          <ExpandableCard 
            className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300"
            expandedContent={
              <div className="space-y-2">
                <div className="text-sm">
                  <div className="font-bold mb-2">CSO 2024 Presentations:</div>
                  <ul className="space-y-2">
                    <li className="bg-white/10 p-2 rounded flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      <span>13 Research Presentations</span>
                    </li>
                    <li className="bg-white/10 p-2 rounded flex items-center">
                      <Star className="w-5 h-5 mr-2" />
                      <span>Multiple Faculty Panelists</span>
                    </li>
                    <li className="bg-white/10 p-2 rounded flex items-center">
                      <Target className="w-5 h-5 mr-2" />
                      <span>Resident & Student Involvement</span>
                    </li>
                  </ul>
                </div>
              </div>
            }
          >
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-3" />
              <div className="text-4xl font-bold mb-2">13</div>
              <div className="text-lg">CSO Presentations</div>
            </div>
          </ExpandableCard>
        </div>

        {/* Publication Analysis Card */}
        <ExpandableCard 
          className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white shadow-lg hover:shadow-indigo-500/50 transition-shadow duration-300"
          expandedContent={
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Journal Distribution</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between items-center bg-white/10 p-2 rounded">
                      <span>PLOS ONE</span>
                      <span className="font-bold text-lg">4</span>
                    </li>
                    <li className="flex justify-between items-center bg-white/10 p-2 rounded">
                      <span>Journal of Surgical Research</span>
                      <span className="font-bold text-lg">1</span>
                    </li>
                    <li className="flex justify-between items-center bg-white/10 p-2 rounded">
                      <span>Allergy & Rhinology</span>
                      <span className="font-bold text-lg">2</span>
                    </li>
                    <li className="flex justify-between items-center bg-white/10 p-2 rounded">
                      <span>Other Specialty Journals</span>
                      <span className="font-bold text-lg">18</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Impact Metrics</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between items-center bg-white/10 p-2 rounded">
                      <span>Papers with Altmetric Scores</span>
                      <span className="font-bold text-lg">8</span>
                    </li>
                    <li className="flex justify-between items-center bg-white/10 p-2 rounded">
                      <span>Highest Altmetric</span>
                      <span className="font-bold text-lg">19</span>
                    </li>
                    <li className="flex justify-between items-center bg-white/10 p-2 rounded">
                      <span>Papers with Citations</span>
                      <span className="font-bold text-lg">3</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">Notable Papers</h4>
                <ul className="space-y-3 text-sm">
                  <li className="bg-white/10 p-3 rounded-lg">
                    <div className="font-bold flex items-center">
                      <Award className="w-5 h-5 mr-2" />
                      Highest Altmetric Score (19)
                    </div>
                    <div>&quot;Extent of Endoscopic Sinus Surgery in Chronic Rhinosinusitis&quot;</div>
                  </li>
                  <li className="bg-white/10 p-3 rounded-lg">
                    <div className="font-bold flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Most Cited
                    </div>
                    <div>&quot;Comparison of upper and lower airway expression of SARS‐CoV‐2 receptors in allergic asthma&quot;</div>
                  </li>
                </ul>
              </div>
            </div>
          }
        >
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <FileText className="w-8 h-8 mr-2" />
            Publication Analysis
          </h3>
        </ExpandableCard>

        {/* Research Network Card */}
        <ExpandableCard 
          className="bg-gradient-to-br from-purple-600 to-pink-700 text-white shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300"
          expandedContent={
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3 flex items-center">
                    <Building2 className="w-5 h-5 mr-2" />
                    Institutional Partners
                  </h4>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Star className="w-4 h-4 mr-2" />
                        McMaster University
                      </li>
                      <li className="flex items-center">
                        <Star className="w-4 h-4 mr-2" />
                        University of Toronto
                      </li>
                      <li className="flex items-center">
                        <Star className="w-4 h-4 mr-2" />
                        Harvard Medical School
                      </li>
                      <li className="flex items-center">
                        <Star className="w-4 h-4 mr-2" />
                        Johns Hopkins University
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3 flex items-center">
                    <Globe className="w-5 h-5 mr-2" />
                    Geographic Reach
                  </h4>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Zap className="w-4 h-4 mr-2" />
                        Canada (Multiple Centers)
                      </li>
                      <li className="flex items-center">
                        <Zap className="w-4 h-4 mr-2" />
                        United States
                      </li>
                      <li className="flex items-center">
                        <Zap className="w-4 h-4 mr-2" />
                        International Collaborations
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">Notable Multi-Center Collaborations</h4>
                <div className="bg-white/10 p-4 rounded-lg">
                  <ul className="space-y-3 text-sm">
                    <li>
                      <div className="font-semibold flex items-center">
                        <Target className="w-4 h-4 mr-2" />
                        Switching biologics in chronic rhinosinusitis
                      </div>
                      <div className="text-xs opacity-80 ml-6">Multiple Canadian Centers</div>
                    </li>
                    <li>
                      <div className="font-semibold flex items-center">
                        <Target className="w-4 h-4 mr-2" />
                        SARS-CoV-2 receptors study
                      </div>
                      <div className="text-xs opacity-80 ml-6">Multi-institutional collaboration</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          }
        >
          <h3 className="text-2xl font-bold flex items-center">
            <Users className="w-8 h-8 mr-2" />
            Research Network
          </h3>
        </ExpandableCard>

        {/* Research Focus Areas Card */}
        <ExpandableCard 
          className="bg-gradient-to-br from-amber-600 to-orange-700 text-white shadow-lg hover:shadow-amber-500/50 transition-shadow duration-300"
          expandedContent={
            <div className="space-y-4">
              <div>
                <h4 className="font-bold mb-2">Selected Publications:</h4>
                <ul className="space-y-2">
                  <li className="bg-white/10 p-3 rounded-lg">
                    <div className="font-semibold">&quot;Extent of Endoscopic Sinus Surgery in Chronic Rhinosinusitis&quot;</div>
                    <div className="text-sm mt-1 flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Altmetric: 19
                    </div>
                  </li>
                  <li className="bg-white/10 p-3 rounded-lg">
                    <div className="font-semibold">&quot;Comparison of upper and lower airway expression of SARS‐CoV‐2 receptors in allergic asthma&quot;</div>
                    <div className="text-sm mt-1 flex items-center">
                      <Quote className="w-4 h-4 mr-1" />
                      Citations: 1
                    </div>
                  </li>
                  <li className="bg-white/10 p-3 rounded-lg">
                    <div className="font-semibold">&quot;Traumatic penetrating head injury by crossbow projectiles&quot;</div>
                    <div className="text-sm mt-1 flex items-center">
                      <Quote className="w-4 h-4 mr-1" />
                      Citations: 1
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          }
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Research Focus Areas</h3>
            <div className="flex items-center gap-4 bg-white/10 p-3 rounded-lg">
              <div className="text-3xl">🏆</div>
              <div>
                <div className="text-xl font-bold">Head & Neck Oncology</div>
                <div className="text-sm">Including OPSCC and oral cavity research</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/10 p-3 rounded-lg">
              <div className="text-3xl">🥈</div>
              <div>
                <div className="text-xl font-bold">Endocrine Surgery</div>
                <div className="text-sm">Thyroid and parathyroid studies</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/10 p-3 rounded-lg">
              <div className="text-3xl">🥉</div>
              <div>
                <div className="text-xl font-bold">Endoscopic Sinus Surgery</div>
                <div className="text-sm">Including rhinosinusitis research</div>
              </div>
            </div>
          </div>
        </ExpandableCard>
      </div>
    </div>
  );
};

export default ResearchWrapped;


