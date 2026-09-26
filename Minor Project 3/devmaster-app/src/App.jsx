import React, { useState } from 'react';
import {
  LayoutDashboard,
  BookOpen,
  Calendar,
  CheckSquare,
  Target,
  Briefcase,
  FileText,
  Folder,
  Plus,
  X,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Clock,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';

export default function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  // ================= STATE MANAGEMENT =================
  // Courses
  const [courses, setCourses] = useState([
    { id: 1, name: 'Advanced Algorithms', status: 'Active', instructor: 'Prof. Elena Marsh', credits: 4, grade: 'A-', code: 'CS', type: 'Core', progress: 68 },
    { id: 2, name: 'Database Systems', status: 'Active', instructor: 'Dr. Olu Adeyemi', credits: 3, grade: 'B+', code: 'CS', type: 'Elective', progress: 52 },
    { id: 3, name: 'Product Design Principles', status: 'Active', instructor: 'Sara Lindqvist', credits: 3, grade: 'A', code: 'Design', type: '', progress: 88 },
    { id: 4, name: 'Business Economics', status: 'Completed', instructor: 'Prof. Jiang Wei', credits: 3, grade: 'A', code: 'Business', type: '', progress: 100 },
    { id: 5, name: 'Machine Learning Fundamentals', status: 'Upcoming', instructor: 'Dr. Amara Diallo', credits: 4, grade: 'AI', code: 'CS', type: 'AI', progress: 0 }
  ]);
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [newCourse, setNewCourse] = useState({ name: '', instructor: '', credits: 3, tags: '' });

  // Assignments / To-Do
  const [assignments, setAssignments] = useState([
    { id: 1, title: 'Market Analysis Essay', course: 'Business Economics - Essay', notes: 'Submitted on time.', dueDate: 'Sep 14, 2026', status: 'Graded', grade: 'A-' },
    { id: 2, title: 'SQL Query Optimization Lab', course: 'Database Systems - Lab', notes: 'Submitted 2 hours early.', dueDate: 'Sep 28, 2026', status: 'Submitted' },
    { id: 3, title: 'Database Design - ER Diagram', course: 'Database Systems - Assignment', notes: 'Include 3NF normalization steps.', dueDate: 'Sep 23, 2026', status: 'In Progress', overdue: true },
    { id: 4, title: 'Algorithm Analysis Report', course: 'Advanced Algorithms - Report', notes: 'Compare O(n log n) sorting algorithms.', dueDate: 'Sep 28, 2026', status: 'To Do' },
    { id: 5, title: 'Mid-Semester Exam', course: 'Advanced Algorithms - Exam', notes: 'Review chapters 4-8.', dueDate: 'Sep 28, 2026', status: 'To Do' },
    { id: 6, title: 'UI Prototype - Mobile App', course: 'Product Design Principles - Project', notes: 'Prototype in Figma, include 5 screens.', dueDate: 'Oct 5, 2026', status: 'In Progress' }
  ]);
  const [assignmentFilter, setAssignmentFilter] = useState('All');
  const [showAssignmentModal, setShowAssignmentModal] = useState(false);
  const [newAssignment, setNewAssignment] = useState({ title: '', course: '', type: 'Assignment', dueDate: '2026-09-25', notes: '' });

  // Study Planner Sessions
  const [sessions, setSessions] = useState([
    { id: 1, subject: 'Algorithms', topic: 'Dynamic Programming', day: 'MON', time: '08:30', duration: '90m', color: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
    { id: 2, subject: 'Product Design', topic: 'Figma Prototyping', day: 'TUE', time: '10:00', duration: '120m', color: 'bg-purple-100 text-purple-700 border-purple-200' },
    { id: 3, subject: 'Algorithms', topic: 'Graph Traversal', day: 'WED', time: '08:30', duration: '90m', color: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
    { id: 4, subject: 'Economics', topic: 'Market Equilibrium', day: 'THU', time: '11:00', duration: '60m', color: 'bg-amber-100 text-amber-700 border-amber-200' },
    { id: 5, subject: 'ML Basics', topic: 'Linear Regression', day: 'FRI', time: '09:00', duration: '120m', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
    { id: 6, subject: 'Databases', topic: 'SQL Joins & Indexing', day: 'MON', time: '14:00', duration: '60m', color: 'bg-blue-100 text-blue-700 border-blue-200' },
    { id: 7, subject: 'Databases', topic: 'Normalization', day: 'THU', time: '13:00', duration: '60m', color: 'bg-blue-100 text-blue-700 border-blue-200' }
  ]);
  const [showSessionModal, setShowSessionModal] = useState(false);
  const [newSession, setNewSession] = useState({ subject: '', topic: '', day: 'Mon', time: '09:00', duration: '60', color: '#6366f1' });

  // CRM Pipeline Deals
  const [deals, setDeals] = useState([
    { id: 1, name: 'Meridian Corp', contact: 'Sara Chen', lastContact: 'Sep 20', tags: ['Proposal', 'Enterprise'], value: 24000, prob: 65, stage: 'Proposal' },
    { id: 2, name: 'Volta Energy', contact: 'Marcus Kim', lastContact: 'Sep 18', tags: ['Qualified', 'SMB'], value: 8500, prob: 40, stage: 'Qualified' },
    { id: 3, name: 'Nexus Labs', contact: 'Priya Nair', lastContact: 'Sep 19', tags: ['Negotiation', 'Enterprise', 'Annual'], value: 52000, prob: 80, stage: 'Negotiation' },
    { id: 4, name: 'Bloom Studio', contact: 'Léa Fontaine', lastContact: 'Sep 15', tags: ['Lead', 'SMB'], value: 3200, prob: 20, stage: 'Lead' },
    { id: 5, name: 'Arco Systems', contact: 'David Osei', lastContact: 'Sep 12', tags: ['Closed Won', 'Mid-Market'], value: 18000, prob: 100, stage: 'Closed Won' },
    { id: 6, name: 'Phantom Digital', contact: 'Jun Tanaka', lastContact: 'Sep 8', tags: ['Closed Lost', 'SMB'], value: 7000, prob: 0, stage: 'Closed Lost' }
  ]);
  const [dealFilter, setDealFilter] = useState('All');
  const [showDealModal, setShowDealModal] = useState(false);
  const [newDeal, setNewDeal] = useState({ company: '', contact: '', value: 30000, stage: 'Lead', tags: '' });

  // Notes & Wiki Pages
  const [wikiPages, setWikiPages] = useState([
    {
      id: 'arch',
      title: 'Architecture Overview',
      category: 'Engineering',
      tags: ['backend', 'infra'],
      date: 'Sep 20, 2026',
      content: 'Our system uses a microservices architecture deployed on Kubernetes. Services communicate via gRPC internally and REST externally.\n\nKey services:\n• auth-service: OAuth2 + JWT\n• api-gateway: Rate limiting, routing\n• notification-service: Email + push\n• analytics-service: Event pipeline\n\nAll services are containerized and ship via GitHub Actions CI/CD pipeline to AWS EKS.'
    },
    {
      id: 'deploy',
      title: 'Deployment Runbook',
      category: 'Engineering',
      tags: ['devops', 'deploy'],
      date: 'Sep 17, 2026',
      content: 'All deployments go through CI. Manual deployments are disabled in production.\n\nSteps:\n1. Merge PR to main\n2. CI runs tests + build (~8min)\n3. Docker image tagged + pushed to ECR\n4. Helm chart updated automatically\n5. Rollout monitored via Datadog dashboard\n\n**Rollback:** `kubectl rollout undo deployment/<name> -n production`'
    },
    {
      id: 'design',
      title: 'Design System Guidelines',
      category: 'Design',
      tags: ['design', 'tokens', 'components'],
      date: 'Sep 19, 2026',
      content: 'Design tokens live in `/packages/tokens`. Components are in Storybook at design.internal.company.com.\n\n• **Color system:** Semantic tokens (primary, secondary, muted) map to functional roles — never reference raw hex in component code.\n• **Typography:** Fraunces for display, Inter for UI. Scale: 12/14/16/20/24/32/48px.\n• **Spacing:** 4px base unit. Use multiples: 4, 8, 12, 16, 24, 32, 48, 64.'
    },
    {
      id: 'gtm',
      title: 'Go-To-Market Playbook',
      category: 'Business',
      tags: ['gtm', 'sales', 'marketing'],
      date: 'Sep 16, 2026',
      content: 'Target segments: Series A-C SaaS companies, 50-500 employees, ARR $1M-$20M.\n\n• **ICP:** VP Engineering or CTO at a growth-stage SaaS.\n• **Channels:** Outbound (LinkedIn + cold email), Inbound (SEO, content), Partnerships.\n• **Sales cycle:** Average 45 days, 3 touchpoints to close.'
    },
    {
      id: 'onboard',
      title: 'Onboarding Checklist',
      category: 'HR',
      tags: ['hr', 'onboarding'],
      date: 'Sep 14, 2026',
      content: 'Week 1:\n[ ] Set up dev environment\n[ ] Read architecture docs\n[ ] Shadow a customer call\n[ ] Intro 1:1s with team leads\n\nWeek 2:\n[ ] First PR merged\n[ ] Attend sprint planning\n[ ] Complete security training\n\nWeek 4:\n[ ] Own a feature end-to-end\n[ ] 30-day check-in with manager'
    }
  ]);
  const [selectedWikiId, setSelectedWikiId] = useState('arch');
  const [showWikiModal, setShowWikiModal] = useState(false);
  const [newWiki, setNewWiki] = useState({ title: '', category: 'Engineering', tags: '', content: '' });

  // Meeting Notes
  const [meetingNotes, setMeetingNotes] = useState([
    {
      id: 'q4',
      title: 'Q4 Planning Session',
      date: 'Sep 18, 2026',
      badge: 'Strategic',
      attendees: ['Miriam Osel', 'Carlos Vega', 'Lena Park'],
      agenda: ['Review Q3 results', 'Set Q4 OKRs', 'Resource allocation'],
      decisions: ['Expand to EU market in Q4', 'Hire 3 senior engineers by Nov'],
      actions: [
        { title: 'Draft Q4 OKR doc', owner: 'Lena Park', date: 'Sep 25' },
        { title: 'EU market research', owner: 'Carlos Vega', date: 'Sep 30' }
      ]
    },
    {
      id: 'roadmap',
      title: 'Product Roadmap Review',
      date: 'Sep 15, 2026',
      badge: 'Product',
      attendees: ['Priya Nair', 'Tom Kellner', 'Sara Lin'],
      agenda: ['Prioritize backlog', 'Design feedback', 'Release timeline'],
      decisions: ['Delay v2.5 to Oct 15', 'Ship dark mode in v2.4.1'],
      actions: [
        { title: 'Update roadmap doc', owner: 'Priya Nair', date: 'Sep 18' },
        { title: 'Dark mode spec', owner: 'Sara Lin', date: 'Sep 22' }
      ]
    }
  ]);
  const [selectedMeetingId, setSelectedMeetingId] = useState('q4');
  const [newAgendaItem, setNewAgendaItem] = useState('');
  const [showAddAgenda, setShowAddAgenda] = useState(false);
  const [newDecisionItem, setNewDecisionItem] = useState('');
  const [showAddDecision, setShowAddDecision] = useState(false);
  const [newActionItem, setNewActionItem] = useState({ title: '', owner: '', date: '2026-09-25' });
  const [showAddAction, setShowAddAction] = useState(false);

  // OKR Goals
  const [okrs, setOkrs] = useState([
    {
      id: 1,
      title: 'Launch MVP to beta users',
      status: 'On Track',
      dept: 'Product - Q3 2026',
      overall: 86,
      krs: [
        { name: 'Onboard beta users', current: 85, target: 100, unit: 'users', percent: 85 },
        { name: 'Achieve NPS score', current: 42, target: 50, unit: 'pts', percent: 84 },
        { name: 'Resolve P0 bugs', current: 18, target: 20, unit: 'issues', percent: 90 }
      ]
    },
    {
      id: 2,
      title: 'Grow monthly recurring revenue',
      status: 'At Risk',
      dept: 'Sales - Q3 2026',
      overall: 41,
      krs: [
        { name: 'Close enterprise deals', current: 3, target: 8, unit: 'deals', percent: 38 },
        { name: 'MRR growth', current: 22800, target: 50000, unit: '$', percent: 44 }
      ]
    },
    {
      id: 3,
      title: 'Build a world-class engineering culture',
      status: 'On Track',
      dept: 'Eng - Q3 2026',
      overall: 98,
      krs: [
        { name: 'Deploy CI/CD pipeline', current: 1, target: 1, unit: 'pipeline', percent: 100 },
        { name: 'Reduce deploy time', current: 8, target: 5, unit: 'min', percent: 100 },
        { name: 'Eng satisfaction score', current: 4.2, target: 4.5, unit: '/ 5', percent: 93 }
      ]
    }
  ]);

  // ================= HANDLERS =================
  const handleAddCourse = (e) => {
    e.preventDefault();
    if (!newCourse.name) return;
    setCourses([...courses, {
      id: Date.now(),
      name: newCourse.name,
      status: 'Active',
      instructor: newCourse.instructor || 'TBD',
      credits: Number(newCourse.credits) || 3,
      grade: 'A',
      code: newCourse.tags || 'General',
      type: 'Core',
      progress: 0
    }]);
    setNewCourse({ name: '', instructor: '', credits: 3, tags: '' });
    setShowCourseModal(false);
  };

  const handleAddAssignment = (e) => {
    e.preventDefault();
    if (!newAssignment.title) return;
    setAssignments([...assignments, {
      id: Date.now(),
      title: newAssignment.title,
      course: `${newAssignment.course || 'General'} - ${newAssignment.type}`,
      notes: newAssignment.notes,
      dueDate: newAssignment.dueDate,
      status: 'To Do'
    }]);
    setNewAssignment({ title: '', course: '', type: 'Assignment', dueDate: '2026-09-25', notes: '' });
    setShowAssignmentModal(false);
  };

  const handleAddSession = (e) => {
    e.preventDefault();
    if (!newSession.subject) return;
    const dayMap = { Mon: 'MON', Tue: 'TUE', Wed: 'WED', Thu: 'THU', Fri: 'FRI' };
    setSessions([...sessions, {
      id: Date.now(),
      subject: newSession.subject,
      topic: newSession.topic,
      day: dayMap[newSession.day] || 'MON',
      time: newSession.time,
      duration: `${newSession.duration}m`,
      color: 'bg-purple-100 text-purple-700 border-purple-200'
    }]);
    setNewSession({ subject: '', topic: '', day: 'Mon', time: '09:00', duration: '60', color: '#6366f1' });
    setShowSessionModal(false);
  };

  const handleAddDeal = (e) => {
    e.preventDefault();
    if (!newDeal.company) return;
    setDeals([...deals, {
      id: Date.now(),
      name: newDeal.company,
      contact: newDeal.contact || 'Lead Contact',
      lastContact: 'Today',
      tags: [newDeal.stage, newDeal.tags || 'Lead'],
      value: Number(newDeal.value) || 10000,
      prob: 50,
      stage: newDeal.stage
    }]);
    setNewDeal({ company: '', contact: '', value: 30000, stage: 'Lead', tags: '' });
    setShowDealModal(false);
  };

  const handleAddWiki = (e) => {
    e.preventDefault();
    if (!newWiki.title) return;
    const newId = `wiki-${Date.now()}`;
    const pageObj = {
      id: newId,
      title: newWiki.title,
      category: newWiki.category,
      tags: newWiki.tags ? newWiki.tags.split(',').map(t => t.trim()) : ['general'],
      date: 'Sep 25, 2026',
      content: newWiki.content || 'New document content...'
    };
    setWikiPages([...wikiPages, pageObj]);
    setSelectedWikiId(newId);
    setNewWiki({ title: '', category: 'Engineering', tags: '', content: '' });
    setShowWikiModal(false);
  };

  const currentMeeting = meetingNotes.find(m => m.id === selectedMeetingId) || meetingNotes[0];

  const handleAddAgenda = (e) => {
    e.preventDefault();
    if (!newAgendaItem) return;
    setMeetingNotes(meetingNotes.map(m => m.id === selectedMeetingId ? { ...m, agenda: [...m.agenda, newAgendaItem] } : m));
    setNewAgendaItem('');
    setShowAddAgenda(false);
  };

  const handleAddDecision = (e) => {
    e.preventDefault();
    if (!newDecisionItem) return;
    setMeetingNotes(meetingNotes.map(m => m.id === selectedMeetingId ? { ...m, decisions: [...m.decisions, newDecisionItem] } : m));
    setNewDecisionItem('');
    setShowAddDecision(false);
  };

  const handleAddAction = (e) => {
    e.preventDefault();
    if (!newActionItem.title) return;
    setMeetingNotes(meetingNotes.map(m => m.id === selectedMeetingId ? {
      ...m,
      actions: [...m.actions, { title: newActionItem.title, owner: newActionItem.owner || 'You', date: newActionItem.date }]
    } : m));
    setNewActionItem({ title: '', owner: '', date: '2026-09-25' });
    setShowAddAction(false);
  };

  const handleOKRIncrement = (okrId, krIdx) => {
    setOkrs(okrs.map(okr => {
      if (okr.id !== okrId) return okr;
      const updatedKrs = okr.krs.map((kr, idx) => {
        if (idx !== krIdx) return kr;
        const newCurr = kr.current + 1;
        const newPct = Math.min(100, Math.round((newCurr / kr.target) * 100));
        return { ...kr, current: newCurr, percent: newPct };
      });
      const avg = Math.round(updatedKrs.reduce((acc, k) => acc + k.percent, 0) / updatedKrs.length);
      return { ...okr, krs: updatedKrs, overall: avg };
    }));
  };

  // Filtered assignments
  const filteredAssignments = assignments.filter(a => {
    if (assignmentFilter === 'All') return true;
    return a.status === assignmentFilter;
  });

  const selectedWiki = wikiPages.find(w => w.id === selectedWikiId) || wikiPages[0];

  return (
    <div className="flex h-screen bg-[#FBFBFA] font-sans text-gray-800 antialiased overflow-hidden">
      
      {/* ================= SIDEBAR ================= */}
      <aside className={`bg-[#F7F7F5] border-r border-gray-200 flex flex-col transition-all duration-300 relative ${sidebarCollapsed ? 'w-16' : 'w-64'}`}>
        {/* Header */}
        <div className="p-4 flex items-center justify-between border-b border-gray-200/60 h-14">
          {!sidebarCollapsed && (
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">D</div>
              <span className="font-semibold text-gray-900 tracking-tight">devmaster app</span>
            </div>
          )}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-1 rounded hover:bg-gray-200/60 text-gray-500 transition-colors ml-auto"
            title={sidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {sidebarCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto px-2 py-4 space-y-6">
          {/* Overview */}
          <div>
            {!sidebarCollapsed && <p className="px-3 text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Overview</p>}
            <nav className="space-y-0.5">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'dashboard' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-200/50 hover:text-gray-900'}`}
              >
                <LayoutDashboard size={18} className={activeTab === 'dashboard' ? 'text-indigo-600' : 'text-gray-400'} />
                {!sidebarCollapsed && <span>Dashboard</span>}
              </button>
            </nav>
          </div>

          {/* Education */}
          <div>
            {!sidebarCollapsed && <p className="px-3 text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Education</p>}
            <nav className="space-y-0.5">
              <button
                onClick={() => setActiveTab('courses')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'courses' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-200/50 hover:text-gray-900'}`}
              >
                <BookOpen size={18} className={activeTab === 'courses' ? 'text-indigo-600' : 'text-gray-400'} />
                {!sidebarCollapsed && <span>Course Tracker</span>}
              </button>
              <button
                onClick={() => setActiveTab('study')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'study' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-200/50 hover:text-gray-900'}`}
              >
                <Calendar size={18} className={activeTab === 'study' ? 'text-indigo-600' : 'text-gray-400'} />
                {!sidebarCollapsed && <span>Study Planner</span>}
              </button>
              <button
                onClick={() => setActiveTab('assignments')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'assignments' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-200/50 hover:text-gray-900'}`}
              >
                <CheckSquare size={18} className={activeTab === 'assignments' ? 'text-indigo-600' : 'text-gray-400'} />
                {!sidebarCollapsed && <span>Assignments</span>}
              </button>
            </nav>
          </div>

          {/* Business */}
          <div>
            {!sidebarCollapsed && <p className="px-3 text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Business</p>}
            <nav className="space-y-0.5">
              <button
                onClick={() => setActiveTab('okr')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'okr' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-200/50 hover:text-gray-900'}`}
              >
                <Target size={18} className={activeTab === 'okr' ? 'text-indigo-600' : 'text-gray-400'} />
                {!sidebarCollapsed && <span>OKR Goals</span>}
              </button>
              <button
                onClick={() => setActiveTab('crm')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'crm' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-200/50 hover:text-gray-900'}`}
              >
                <Briefcase size={18} className={activeTab === 'crm' ? 'text-indigo-600' : 'text-gray-400'} />
                {!sidebarCollapsed && <span>CRM Pipeline</span>}
              </button>
              <button
                onClick={() => setActiveTab('meetings')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'meetings' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-200/50 hover:text-gray-900'}`}
              >
                <FileText size={18} className={activeTab === 'meetings' ? 'text-indigo-600' : 'text-gray-400'} />
                {!sidebarCollapsed && <span>Meeting Notes</span>}
              </button>
              <button
                onClick={() => setActiveTab('wiki')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'wiki' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-200/50 hover:text-gray-900'}`}
              >
                <Folder size={18} className={activeTab === 'wiki' ? 'text-indigo-600' : 'text-gray-400'} />
                {!sidebarCollapsed && <span>Project Wiki</span>}
              </button>
            </nav>
          </div>
        </div>

        {/* Footer Help Button */}
        <div className="p-3 border-t border-gray-200/60">
          <button className="w-full flex items-center justify-center p-2 rounded-lg text-gray-500 hover:bg-gray-200/50 transition-colors">
            <HelpCircle size={20} />
          </button>
        </div>
      </aside>

      {/* ================= MAIN CONTENT AREA ================= */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        <div className="max-w-6xl w-full mx-auto p-8 space-y-8">

          {/* 1. DASHBOARD TAB */}
          {activeTab === 'dashboard' && (
            <div className="space-y-8 animate-fadeIn">
              {/* Header */}
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-3xl">🏠</span>
                  <h1 className="text-3xl font-bold tracking-tight text-gray-900">Home Dashboard</h1>
                </div>
                <p className="text-sm text-gray-500">Good morning — Friday, September 25</p>
              </div>

              {/* Metric Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-5 bg-white rounded-xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-3xl font-bold text-blue-600">{courses.filter(c => c.status === 'Active').length}</span>
                    <p className="font-semibold text-gray-800 mt-1">Courses Enrolled</p>
                  </div>
                  <span className="text-xs text-gray-400 mt-3">+1 this month</span>
                </div>

                <div className="p-5 bg-white rounded-xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-6 h-6 rounded bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold mb-1">✓</div>
                    <span className="text-3xl font-bold text-gray-900">34</span>
                    <p className="font-semibold text-gray-800 mt-1">Tasks Completed</p>
                  </div>
                  <span className="text-xs text-emerald-600 font-medium mt-3">89% completion rate</span>
                </div>

                <div className="p-5 bg-white rounded-xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-2xl font-bold text-purple-600">3/4</span>
                    <p className="font-semibold text-gray-800 mt-1">OKRs On Track</p>
                  </div>
                  <span className="text-xs text-gray-400 mt-3">75% objective health</span>
                </div>

                <div className="p-5 bg-white rounded-xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-3xl font-bold text-amber-500">12</span>
                    <p className="font-semibold text-gray-800 mt-1">Active Deals</p>
                  </div>
                  <span className="text-xs text-gray-400 mt-3">$48k pipeline value</span>
                </div>
              </div>

              {/* Recent Activity & Upcoming Deadlines */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Activity */}
                <div className="bg-white p-6 rounded-xl border border-gray-200/80 shadow-sm">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    <div className="flex items-start justify-between py-2 border-b border-gray-100 last:border-0">
                      <div className="flex items-start gap-3">
                        <span className="text-base mt-0.5">📌</span>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Assignment "Database Design" due in 2 days</p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-400">Today</span>
                    </div>

                    <div className="flex items-start justify-between py-2 border-b border-gray-100 last:border-0">
                      <div className="flex items-start gap-3">
                        <span className="text-base mt-0.5">🎯</span>
                        <div>
                          <p className="text-sm font-medium text-gray-900">OKR "Launch MVP" reached 80% progress</p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-400">Yesterday</span>
                    </div>

                    <div className="flex items-start justify-between py-2 border-b border-gray-100 last:border-0">
                      <div className="flex items-start gap-3">
                        <span className="text-base mt-0.5">💼</span>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Deal "Meridian Corp" moved to Proposal stage</p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-400">Sep 19</span>
                    </div>

                    <div className="flex items-start justify-between py-2 border-b border-gray-100 last:border-0">
                      <div className="flex items-start gap-3">
                        <span className="text-base mt-0.5">📝</span>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Q4 Planning meeting notes added</p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-400">Sep 18</span>
                    </div>

                    <div className="flex items-start justify-between py-2 border-b border-gray-100 last:border-0">
                      <div className="flex items-start gap-3">
                        <span className="text-base mt-0.5">✅</span>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Completed "Systems Thinking" Chapter 4</p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-400">Sep 17</span>
                    </div>
                  </div>
                </div>

                {/* Upcoming Deadlines */}
                <div className="bg-white p-6 rounded-xl border border-gray-200/80 shadow-sm">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Upcoming Deadlines</h3>
                  <div className="space-y-3">
                    {assignments.slice(0, 4).map(item => (
                      <div key={item.id} className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-gray-200 bg-gray-50/50 transition-all">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">📗</span>
                          <div>
                            <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                            <p className="text-xs text-gray-400">{item.dueDate}</p>
                          </div>
                        </div>
                        {item.overdue ? (
                          <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-red-100 text-red-600 border border-red-200">Urgent</span>
                        ) : (
                          <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">Normal</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. COURSE TRACKER TAB */}
          {activeTab === 'courses' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-3xl">📘</span>
                    <h1 className="text-3xl font-bold text-gray-900">Course Tracker</h1>
                  </div>
                  <p className="text-sm text-gray-500">Track progress, grades, and credits for all enrolled courses</p>
                </div>
              </div>

              {/* Stats Overview */}
              <div className="grid grid-cols-3 gap-6 bg-white p-6 rounded-xl border border-gray-200/80 shadow-sm text-center">
                <div>
                  <span className="text-3xl font-bold text-blue-600">{courses.filter(c => c.status === 'Active').length}</span>
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mt-1">Enrolled</p>
                </div>
                <div>
                  <span className="text-3xl font-bold text-purple-600">67%</span>
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mt-1">Avg Progress</p>
                </div>
                <div>
                  <span className="text-3xl font-bold text-emerald-600">{courses.reduce((acc, c) => acc + c.credits, 0)}</span>
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mt-1">Total Credits</p>
                </div>
              </div>

              {/* Course List Header & Modal Trigger */}
              <div className="flex items-center justify-between pt-4">
                <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">All Courses</h2>
                <button
                  onClick={() => setShowCourseModal(true)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-md hover:bg-indigo-100 transition-colors"
                >
                  <Plus size={14} /> Add Course
                </button>
              </div>

              {/* Course Cards */}
              <div className="space-y-4">
                {courses.map(course => (
                  <div key={course.id} className="bg-white p-6 rounded-xl border border-gray-200/80 shadow-sm hover:border-gray-300 transition-all">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold text-gray-900">{course.name}</h3>
                          <span className={`px-2 py-0.5 text-xs font-semibold rounded ${course.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : course.status === 'Completed' ? 'bg-purple-100 text-purple-700' : 'bg-amber-100 text-amber-700'}`}>
                            {course.status}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{course.instructor} • {course.credits} credits</p>
                      </div>

                      <div className="text-right flex flex-col items-end">
                        <span className="text-xl font-bold text-indigo-600">{course.grade}</span>
                        <div className="flex gap-1 mt-2">
                          <span className="px-2 py-0.5 text-[10px] font-bold bg-blue-50 text-blue-600 rounded border border-blue-100">{course.code}</span>
                          {course.type && <span className="px-2 py-0.5 text-[10px] font-bold bg-gray-100 text-gray-600 rounded border border-gray-200">{course.type}</span>}
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-4">
                      <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                        <div className="bg-indigo-600 h-full rounded-full transition-all duration-500" style={{ width: `${course.progress}%` }}></div>
                      </div>
                      <span className="text-xs font-semibold text-gray-500">{course.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. STUDY PLANNER TAB */}
          {activeTab === 'study' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-3xl">📅</span>
                    <h1 className="text-3xl font-bold text-gray-900">Study Planner</h1>
                  </div>
                  <p className="text-sm text-gray-500">Weekly schedule — visualize and manage study sessions</p>
                </div>
                <button
                  onClick={() => setShowSessionModal(true)}
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
                >
                  <Plus size={16} /> Add Session
                </button>
              </div>

              {/* Status Header */}
              <div className="flex items-center gap-4 text-sm">
                <span className="font-semibold text-gray-900">10h <span className="text-gray-500 font-normal">planned this week</span></span>
                <span className="font-semibold text-gray-900">2h <span className="text-gray-500 font-normal">completed</span></span>
              </div>

              {/* Timetable Grid */}
              <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm overflow-hidden">
                <div className="grid grid-cols-6 border-b border-gray-200 bg-gray-50/50 text-center font-bold text-xs text-gray-500 py-3">
                  <div>TIME</div>
                  <div>MON</div>
                  <div>TUE</div>
                  <div>WED</div>
                  <div>THU</div>
                  <div>FRI</div>
                </div>

                <div className="divide-y divide-gray-100 text-xs">
                  {['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'].map(time => (
                    <div key={time} className="grid grid-cols-6 min-h-[60px] relative">
                      <div className="p-2 text-gray-400 font-mono text-[11px] border-r border-gray-100 bg-gray-50/30 flex items-start justify-center">
                        {time}
                      </div>

                      {['MON', 'TUE', 'WED', 'THU', 'FRI'].map(day => {
                        const match = sessions.find(s => s.day === day && s.time === time);
                        return (
                          <div key={day} className="p-1 border-r border-gray-100 relative min-h-[60px]">
                            {match && (
                              <div className={`p-2.5 rounded-lg border ${match.color} h-full shadow-xs`}>
                                <p className="font-bold">{match.subject}</p>
                                <p className="text-[11px] opacity-80">{match.topic}</p>
                                <span className="text-[10px] block mt-1 opacity-60">{match.duration}</span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 4. ASSIGNMENT BOARD (TO-DO APP) TAB */}
          {activeTab === 'assignments' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-3xl">📝</span>
                    <h1 className="text-3xl font-bold text-gray-900">Assignment Board</h1>
                  </div>
                  <p className="text-sm text-gray-500">Track every assignment, project, and exam across all courses</p>
                </div>
                <button
                  onClick={() => setShowAssignmentModal(true)}
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
                >
                  <Plus size={16} /> Add Assignment
                </button>
              </div>

              {/* Status Filter Tabs */}
              <div className="flex items-center gap-2 border-b border-gray-200 pb-2">
                {['All', 'To Do', 'In Progress', 'Submitted', 'Graded'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setAssignmentFilter(tab)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${assignmentFilter === tab ? 'bg-indigo-50 text-indigo-700 border border-indigo-200' : 'text-gray-500 hover:text-gray-800'}`}
                  >
                    {tab} ({tab === 'All' ? assignments.length : assignments.filter(a => a.status === tab).length})
                  </button>
                ))}
              </div>

              {/* Assignment Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredAssignments.map(item => (
                  <div key={item.id} className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-sm flex flex-col justify-between hover:border-gray-300 transition-all">
                    <div>
                      <div className="flex items-start justify-between">
                        <h3 className="font-bold text-gray-900 text-base">{item.title}</h3>
                        {item.grade ? (
                          <span className="text-sm font-bold text-emerald-600">{item.grade} • Graded</span>
                        ) : (
                          <select
                            value={item.status}
                            onChange={(e) => {
                              const val = e.target.value;
                              setAssignments(assignments.map(a => a.id === item.id ? { ...a, status: val } : a));
                            }}
                            className="text-xs font-medium border border-gray-200 rounded px-2 py-1 bg-gray-50 focus:outline-none"
                          >
                            <option value="To Do">To Do</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Submitted">Submitted</option>
                            <option value="Graded">Graded</option>
                          </select>
                        )}
                      </div>
                      <p className="text-xs font-medium text-gray-500 mt-0.5">{item.course}</p>
                      <p className="text-xs text-gray-600 mt-3">{item.notes}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        <span>{item.dueDate}</span>
                      </div>
                      {item.overdue && (
                        <span className="text-red-500 font-semibold flex items-center gap-1">
                          <AlertCircle size={12} /> Overdue
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. OKR GOALS TAB */}
          {activeTab === 'okr' && (
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-3xl">🏆</span>
                  <h1 className="text-3xl font-bold text-gray-900">OKR Goals</h1>
                </div>
                <p className="text-sm text-gray-500">Objectives & Key Results — Q3 2026</p>
              </div>

              {/* OKR Cards */}
              <div className="space-y-6">
                {okrs.map(okr => (
                  <div key={okr.id} className="bg-white p-6 rounded-xl border border-gray-200/80 shadow-sm space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold text-gray-900">{okr.title}</h3>
                          <span className={`px-2 py-0.5 text-xs font-semibold rounded ${okr.status === 'On Track' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                            {okr.status}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 mt-0.5">{okr.dept}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-emerald-600">{okr.overall}%</span>
                        <p className="text-[10px] text-gray-400 uppercase font-semibold">Overall</p>
                      </div>
                    </div>

                    {/* Key Results */}
                    <div className="space-y-3 pt-2">
                      {okr.krs.map((kr, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="flex justify-between text-xs text-gray-600 font-medium">
                            <span>{kr.name}</span>
                            <div className="flex items-center gap-3">
                              <span>{kr.current}/{kr.target} {kr.unit}</span>
                              <button
                                onClick={() => handleOKRIncrement(okr.id, idx)}
                                className="px-1.5 py-0.5 bg-gray-100 hover:bg-gray-200 rounded text-[10px] font-bold text-gray-700"
                                title="Increment Progress"
                              >
                                +1
                              </button>
                            </div>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden flex items-center">
                            <div className="bg-indigo-600 h-full rounded-full transition-all duration-300" style={{ width: `${kr.percent}%` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. CRM PIPELINE TAB */}
          {activeTab === 'crm' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-3xl">💛</span>
                    <h1 className="text-3xl font-bold text-gray-900">CRM Pipeline</h1>
                  </div>
                  <p className="text-sm text-gray-500">Track leads, deals, and revenue across your sales funnel</p>
                </div>
                <button
                  onClick={() => setShowDealModal(true)}
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
                >
                  <Plus size={16} /> Add Deal
                </button>
              </div>

              {/* CRM Metrics */}
              <div className="grid grid-cols-3 gap-6 bg-white p-6 rounded-xl border border-gray-200/80 shadow-sm text-center">
                <div>
                  <span className="text-3xl font-bold text-blue-600">4</span>
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mt-1">Active Deals</p>
                </div>
                <div>
                  <span className="text-3xl font-bold text-emerald-600">$87.7k</span>
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mt-1">Pipeline Value</p>
                </div>
                <div>
                  <span className="text-3xl font-bold text-indigo-600">$18.0k</span>
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mt-1">Closed Won</p>
                </div>
              </div>

              {/* Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {['All', 'Lead', 'Qualified', 'Proposal', 'Negotiation', 'Closed Won', 'Closed Lost'].map(stg => (
                  <button
                    key={stg}
                    onClick={() => setDealFilter(stg)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-full border transition-all ${dealFilter === stg ? 'bg-indigo-50 border-indigo-300 text-indigo-700' : 'border-gray-200 text-gray-600 hover:bg-gray-100'}`}
                  >
                    {stg}
                  </button>
                ))}
              </div>

              {/* Deals List */}
              <div className="space-y-3">
                {deals.filter(d => dealFilter === 'All' || d.stage === dealFilter).map(deal => (
                  <div key={deal.id} className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-sm flex items-center justify-between hover:border-gray-300 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm">
                        {deal.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-gray-900 text-sm">{deal.name}</h4>
                          {deal.tags.map((t, idx) => (
                            <span key={idx} className="px-2 py-0.5 text-[10px] font-semibold bg-gray-100 text-gray-600 rounded">{t}</span>
                          ))}
                        </div>
                        <p className="text-xs text-gray-400">{deal.contact} • Last contact: {deal.lastContact}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="font-bold text-gray-900">${deal.value.toLocaleString()}</p>
                        <p className="text-[11px] text-gray-400">{deal.prob}% probability</p>
                      </div>
                      <select
                        value={deal.stage}
                        onChange={(e) => {
                          const val = e.target.value;
                          setDeals(deals.map(d => d.id === deal.id ? { ...d, stage: val } : d));
                        }}
                        className="text-xs font-medium border border-gray-200 rounded px-2 py-1.5 bg-gray-50 focus:outline-none"
                      >
                        <option value="Lead">Lead</option>
                        <option value="Qualified">Qualified</option>
                        <option value="Proposal">Proposal</option>
                        <option value="Negotiation">Negotiation</option>
                        <option value="Closed Won">Closed Won</option>
                        <option value="Closed Lost">Closed Lost</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 7. MEETING NOTES TAB */}
          {activeTab === 'meetings' && (
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-3xl">📄</span>
                  <h1 className="text-3xl font-bold text-gray-900">Meeting Notes</h1>
                </div>
                <p className="text-sm text-gray-500">Structured meeting records with decisions and action items</p>
              </div>

              {/* Notes Switcher */}
              <div className="flex gap-2">
                {meetingNotes.map(m => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMeetingId(m.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${selectedMeetingId === m.id ? 'bg-indigo-600 text-white shadow-sm' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                  >
                    {m.title} <span className="text-xs opacity-75 font-normal ml-1">{m.date}</span>
                  </button>
                ))}
              </div>

              {/* Note Content View */}
              <div className="bg-white p-8 rounded-xl border border-gray-200/80 shadow-sm space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl font-bold text-gray-900">{currentMeeting.title}</h2>
                      <span className="px-2.5 py-0.5 text-xs font-semibold rounded bg-indigo-50 text-indigo-600 border border-indigo-100">{currentMeeting.badge}</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{currentMeeting.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {currentMeeting.attendees.map((a, i) => (
                      <span key={i} className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">{a}</span>
                    ))}
                  </div>
                </div>

                {/* Agenda, Decisions, Action Items Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Agenda */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Agenda</h4>
                      <button onClick={() => setShowAddAgenda(true)} className="text-xs font-semibold text-indigo-600 hover:underline">+ Add</button>
                    </div>
                    <ul className="space-y-2">
                      {currentMeeting.agenda.map((ag, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-gray-400 font-mono text-xs">0{i+1}.</span> {ag}
                        </li>
                      ))}
                    </ul>
                    {showAddAgenda && (
                      <form onSubmit={handleAddAgenda} className="mt-2 flex gap-1">
                        <input
                          type="text"
                          placeholder="Agenda item..."
                          value={newAgendaItem}
                          onChange={(e) => setNewAgendaItem(e.target.value)}
                          className="text-xs p-1.5 border border-gray-300 rounded w-full"
                        />
                        <button type="submit" className="px-2 py-1 bg-indigo-600 text-white text-xs rounded font-medium">Add</button>
                      </form>
                    )}
                  </div>

                  {/* Decisions */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Decisions</h4>
                      <button onClick={() => setShowAddDecision(true)} className="text-xs font-semibold text-indigo-600 hover:underline">+ Add</button>
                    </div>
                    <ul className="space-y-2">
                      {currentMeeting.decisions.map((dec, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span>{dec}</span>
                        </li>
                      ))}
                    </ul>
                    {showAddDecision && (
                      <form onSubmit={handleAddDecision} className="mt-2 flex gap-1">
                        <input
                          type="text"
                          placeholder="Decision made..."
                          value={newDecisionItem}
                          onChange={(e) => setNewDecisionItem(e.target.value)}
                          className="text-xs p-1.5 border border-gray-300 rounded w-full"
                        />
                        <button type="submit" className="px-2 py-1 bg-indigo-600 text-white text-xs rounded font-medium">Add</button>
                      </form>
                    )}
                  </div>

                  {/* Action Items */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Action Items</h4>
                      <button onClick={() => setShowAddAction(true)} className="text-xs font-semibold text-indigo-600 hover:underline">+ Add</button>
                    </div>
                    <div className="space-y-2">
                      {currentMeeting.actions.map((act, i) => (
                        <div key={i} className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                          <p className="text-sm font-semibold text-gray-900">{act.title}</p>
                          <div className="flex justify-between text-xs text-gray-400 mt-1">
                            <span>👤 {act.owner}</span>
                            <span>{act.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    {showAddAction && (
                      <form onSubmit={handleAddAction} className="mt-2 space-y-1.5 bg-gray-50 p-2 rounded border border-gray-200">
                        <input
                          type="text"
                          placeholder="Action item..."
                          value={newActionItem.title}
                          onChange={(e) => setNewActionItem({ ...newActionItem, title: e.target.value })}
                          className="text-xs p-1.5 border border-gray-300 rounded w-full"
                        />
                        <input
                          type="text"
                          placeholder="Owner..."
                          value={newActionItem.owner}
                          onChange={(e) => setNewActionItem({ ...newActionItem, owner: e.target.value })}
                          className="text-xs p-1.5 border border-gray-300 rounded w-full"
                        />
                        <button type="submit" className="w-full py-1 bg-indigo-600 text-white text-xs rounded font-medium">Add Action Item</button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 8. PROJECT WIKI (NOTES APP) TAB */}
          {activeTab === 'wiki' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-3xl">📁</span>
                    <h1 className="text-3xl font-bold text-gray-900">Project Wiki</h1>
                  </div>
                  <p className="text-sm text-gray-500">Living documentation for engineering, design, and business teams</p>
                </div>
                <button
                  onClick={() => setShowWikiModal(true)}
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
                >
                  <Plus size={16} /> New Page
                </button>
              </div>

              {/* Wiki Layout (Sidebar Docs + Note Detail) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Doc Tree Navigation */}
                <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-sm space-y-4">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider px-2">Navigation</h3>
                  <div className="space-y-1">
                    {wikiPages.map(page => (
                      <button
                        key={page.id}
                        onClick={() => setSelectedWikiId(page.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${selectedWikiId === page.id ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}
                      >
                        <span className="truncate">{page.title}</span>
                        <span className="text-[10px] text-gray-400 uppercase shrink-0">{page.category}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Doc Content Viewer */}
                <div className="md:col-span-2 bg-white p-8 rounded-xl border border-gray-200/80 shadow-sm space-y-6">
                  <div className="border-b border-gray-100 pb-4">
                    <h2 className="text-2xl font-bold text-gray-900">{selectedWiki.title}</h2>
                    <p className="text-xs text-gray-400 mt-1">Last edited {selectedWiki.date}</p>
                    <div className="flex gap-1.5 mt-3">
                      {selectedWiki.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-0.5 text-xs font-semibold bg-indigo-50 text-indigo-600 rounded border border-indigo-100">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Render Note Text */}
                  <div className="prose prose-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
                    {selectedWiki.content}
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* ================= MODAL DIALOGS ================= */}

      {/* Add Course Modal */}
      {showCourseModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 space-y-4 animate-scaleUp">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900">Add Course</h3>
              <button onClick={() => setShowCourseModal(false)} className="text-gray-400 hover:text-gray-600"><X size={18} /></button>
            </div>
            <form onSubmit={handleAddCourse} className="space-y-3 text-sm">
              <input
                type="text"
                placeholder="Course name..."
                value={newCourse.name}
                onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
                className="w-full p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <input
                type="text"
                placeholder="Instructor name..."
                value={newCourse.instructor}
                onChange={(e) => setNewCourse({ ...newCourse, instructor: e.target.value })}
                className="w-full p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  placeholder="Credits"
                  value={newCourse.credits}
                  onChange={(e) => setNewCourse({ ...newCourse, credits: e.target.value })}
                  className="w-full p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="text"
                  placeholder="Tags: CS, Design..."
                  value={newCourse.tags}
                  onChange={(e) => setNewCourse({ ...newCourse, tags: e.target.value })}
                  className="w-full p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setShowCourseModal(false)} className="px-4 py-2 border border-gray-200 rounded-lg font-medium text-gray-600 hover:bg-gray-50">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700">Add Course</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Assignment Modal */}
      {showAssignmentModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 space-y-4 animate-scaleUp">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900">Add Assignment</h3>
              <button onClick={() => setShowAssignmentModal(false)} className="text-gray-400 hover:text-gray-600"><X size={18} /></button>
            </div>
            <form onSubmit={handleAddAssignment} className="space-y-3 text-sm">
              <input
                type="text"
                placeholder="Assignment title..."
                value={newAssignment.title}
                onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
                className="w-full p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Course..."
                  value={newAssignment.course}
                  onChange={(e) => setNewAssignment({ ...newAssignment, course: e.target.value })}
                  className="w-full p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <select
                  value={newAssignment.type}
                  onChange={(e) => setNewAssignment({ ...newAssignment, type: e.target.value })}
                  className="w-full p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="Assignment">Assignment</option>
                  <option value="Project">Project</option>
                  <option value="Report">Report</option>
                  <option value="Essay">Essay</option>
                  <option value="Exam">Exam</option>
                  <option value="Lab">Lab</option>
                </select>
              </div>
              <input
                type="date"
                value={newAssignment.dueDate}
                onChange={(e) => setNewAssignment({ ...newAssignment, dueDate: e.target.value })}
                className="w-full p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <textarea
                placeholder="Notes..."
                value={newAssignment.notes}
                onChange={(e) => setNewAssignment({ ...newAssignment, notes: e.target.value })}
                className="w-full p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 h-20"
              />
              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setShowAssignmentModal(false)} className="px-4 py-2 border border-gray-200 rounded-lg font-medium text-gray-600 hover:bg-gray-50">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700">Add Assignment</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Deal Modal */}
      {showDealModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 space-y-4 animate-scaleUp">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900">Add Deal</h3>
              <button onClick={() => setShowDealModal(false)} className="text-gray-400 hover:text-gray-600"><X size={18} /></button>
            </div>
            <form onSubmit={handleAddDeal} className="space-y-3 text-sm">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Company..."
                  value={newDeal.company}
                  onChange={(e) => setNewDeal({ ...newDeal, company: e.target.value })}
                  className="w-full p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Contact name..."
                  value={newDeal.contact}
                  onChange={(e) => setNewDeal({ ...newDeal, contact: e.target.value })}
                  className="w-full p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  placeholder="Deal value ($)"
                  value={newDeal.value}
                  onChange={(e) => setNewDeal({ ...newDeal, value: e.target.value })}
                  className="w-full p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <select
                  value={newDeal.stage}
                  onChange={(e) => setNewDeal({ ...newDeal, stage: e.target.value })}
                  className="w-full p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="Lead">Lead</option>
                  <option value="Qualified">Qualified</option>
                  <option value="Proposal">Proposal</option>
                  <option value="Negotiation">Negotiation</option>
                  <option value="Closed Won">Closed Won</option>
                  <option value="Closed Lost">Closed Lost</option>
                </select>
              </div>
              <input
                type="text"
                placeholder="Tags: Enterprise, SMB..."
                value={newDeal.tags}
                onChange={(e) => setNewDeal({ ...newDeal, tags: e.target.value })}
                className="w-full p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setShowDealModal(false)} className="px-4 py-2 border border-gray-200 rounded-lg font-medium text-gray-600 hover:bg-gray-50">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700">Add Deal</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Wiki Page Modal */}
      {showWikiModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 space-y-4 animate-scaleUp">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900">New Wiki Page</h3>
              <button onClick={() => setShowWikiModal(false)} className="text-gray-400 hover:text-gray-600"><X size={18} /></button>
            </div>
            <form onSubmit={handleAddWiki} className="space-y-3 text-sm">
              <input
                type="text"
                placeholder="Page title..."
                value={newWiki.title}
                onChange={(e) => setNewWiki({ ...newWiki, title: e.target.value })}
                className="w-full p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <div className="grid grid-cols-2 gap-2">
                <select
                  value={newWiki.category}
                  onChange={(e) => setNewWiki({ ...newWiki, category: e.target.value })}
                  className="w-full p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="Engineering">Engineering</option>
                  <option value="Design">Design</option>
                  <option value="Business">Business</option>
                  <option value="HR">HR</option>
                  <option value="Product">Product</option>
                </select>
                <input
                  type="text"
                  placeholder="Tags: infra, api..."
                  value={newWiki.tags}
                  onChange={(e) => setNewWiki({ ...newWiki, tags: e.target.value })}
                  className="w-full p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <textarea
                placeholder="Page content..."
                value={newWiki.content}
                onChange={(e) => setNewWiki({ ...newWiki, content: e.target.value })}
                className="w-full p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 h-28"
              />
              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setShowWikiModal(false)} className="px-4 py-2 border border-gray-200 rounded-lg font-medium text-gray-600 hover:bg-gray-50">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700">Create Page</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Study Session Modal */}
      {showSessionModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 space-y-4 animate-scaleUp">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900">Add Study Session</h3>
              <button onClick={() => setShowSessionModal(false)} className="text-gray-400 hover:text-gray-600"><X size={18} /></button>
            </div>
            <form onSubmit={handleAddSession} className="space-y-3 text-sm">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Subject..."
                  value={newSession.subject}
                  onChange={(e) => setNewSession({ ...newSession, subject: e.target.value })}
                  className="w-full p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Topic..."
                  value={newSession.topic}
                  onChange={(e) => setNewSession({ ...newSession, topic: e.target.value })}
                  className="w-full p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                <select
                  value={newSession.day}
                  onChange={(e) => setNewSession({ ...newSession, day: e.target.value })}
                  className="w-full p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="Mon">Mon</option>
                  <option value="Tue">Tue</option>
                  <option value="Wed">Wed</option>
                  <option value="Thu">Thu</option>
                  <option value="Fri">Fri</option>
                </select>
                <select
                  value={newSession.time}
                  onChange={(e) => setNewSession({ ...newSession, time: e.target.value })}
                  className="w-full p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="08:00">08:00</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                </select>
                <input
                  type="number"
                  placeholder="Duration (m)"
                  value={newSession.duration}
                  onChange={(e) => setNewSession({ ...newSession, duration: e.target.value })}
                  className="w-full p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setShowSessionModal(false)} className="px-4 py-2 border border-gray-200 rounded-lg font-medium text-gray-600 hover:bg-gray-50">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700">Add Session</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}