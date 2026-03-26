import { useEffect, useMemo, useState } from 'react'
import '../App.css'
import './DocsPage.css'
import { Helmet } from 'react-helmet-async'
import Navbar from './Navbar'


// Assets - Premium Tech Visuals
import heroVector from '../assets/globe.png'
import ideMockup from '../assets/mlforge_desktop_ide_docs_mockup.png'

function DocsPage() {
    const [path, setPath] = useState(() => window.location.pathname || '/docs')

    useEffect(() => {
        const onPop = () => setPath(window.location.pathname || '/docs')
        window.addEventListener('popstate', onPop)
        return () => window.removeEventListener('popstate', onPop)
    }, [])

    const navigate = (nextPath: string) => {
        if (!nextPath || nextPath === window.location.pathname) return
        window.history.pushState({}, '', nextPath)
        setPath(nextPath)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const pages: Record<string, any> = useMemo(
        () => ({
            '/docs/getting-started/what-is-mlforge': {
                group: 'Overview',
                title: 'Vision AI Engineering IDE',
                lede: 'The professional environment for local, deterministic vision workflows.',
                sections: [
                    {
                        title: 'The Vision IDE Concept',
                        body: 'Unlike generic ML platforms, ML FORGE is purpose-built for the visual domain. It integrates dataset management, high-performance annotation, and local training into a single, cohesive interface optimized for the computer vision lifecycle.',
                    },
                    {
                        title: 'Why Determinism Matters',
                        body: 'Vision systems fail in production when training inputs cannot be audited. ML FORGE makes every step of the pipeline file-backed and versioned, ensuring that a model trained today can be precisely reproduced a year from now.',
                    },
                    {
                        image: ideMockup,
                        caption: 'ML FORGE - Unified Annotation and Training Interface'
                    },
                    {
                        title: 'Local-First Architecture',
                        body: 'Built for edge, on-prem, and air-gapped environments. ML FORGE executes all compute-heavy tasks (training, evaluation, export) on your local workstation GPUs, keeping sensitive dataset IP entirely within your infrastructure.',
                    }
                ],
            },
            '/docs/getting-started/philosophy': {
                group: 'Overview',
                title: 'Engineering Philosophy',
                lede: 'Building vision systems as engineering artifacts, not black-box experiments.',
                sections: [
                    {
                        title: 'Determinism by Design',
                        body: 'We believe that deep learning should follow the same principles as software engineering. Every model build should be reproducible, every dataset snapshot is immutable, and every hyperparameter change is logged as a commit.',
                    },
                    {
                        title: 'Data-Centric AI',
                        body: 'A model is only as good as its training data. ML FORGE prioritizes high-fidelity annotation and rigorous review cycles over automated black-box features.',
                    }
                ]
            },
            '/docs/core-workflow/dataset-manager': {
                group: 'Core workflow',
                title: 'Dataset Management',
                lede: 'Establish a single source of truth for your vision data with immutable versioning and lineage tracking.',
                sections: [
                    {
                        title: 'Source Integration',
                        body: 'Connect local directories or cloud buckets. ML FORGE indexes your files without duplicating blobs, maintaining a lightning-fast catalog even with millions of visual artifacts.',
                    },
                    {
                        title: 'Versioning & Snapshots',
                        body: 'Create immutable snapshots of your datasets before training. Each snapshot preserves the exact state of classes, splits, and annotations, allowing you to "time-travel" back to any specific experiment context.',
                    }
                ],
            },
            '/docs/core-workflow/annotation-studio': {
                group: 'Core workflow',
                title: 'Annotation Studio',
                lede: 'Professional-grade labeling tools optimized for high-throughput vision engineering.',
                sections: [
                    {
                        title: 'Multi-Task Support',
                        body: 'Simultaneously handle Object Detection, Instance Segmentation, and Classification. The studio architecture is designed to minimize cognitive load and maximize label precision.',
                    },
                    {
                        title: 'Quality Review Cycles',
                        body: 'Implement rigorous review stages. Flag ambiguous samples, assign labels to specific reviewers, and maintain a clear audit trail of who labeled what and when.',
                    }
                ],
            },
            '/docs/core-workflow/training-and-runs': {
                group: 'Core workflow',
                title: 'Engineering Engine',
                lede: 'Execute and monitor local GPU runs with real-time insight into hardware and model health.',
                sections: [
                    {
                        title: 'Hardware Introspection',
                        body: 'Monitor VRAM utilization, GPU thermals, and IO throughput directly within the IDE. ML FORGE optimizes the execution context to prevent bottlenecks and ensure training stability.',
                    }
                ],
            },
            '/docs/core-workflow/training-logs': {
                group: 'Core workflow',
                title: 'Training Logs',
                lede: 'Immutable records of every experiment, batch, and loss spike.',
                sections: [
                    {
                        title: 'Experiment Lineage',
                        body: 'Every training log in ML FORGE is cryptographically linked to the dataset snapshot and model configuration used. This ensures absolute traceability from dataset to deployment.',
                    }
                ]
            },
            '/docs/model-zoo': {
                group: 'Models',
                title: 'Vision Model Zoo',
                lede: 'Curated, high-performance architectures pre-pinned for deterministic results.',
                sections: [
                    {
                        title: 'Deterministic Backbones',
                        body: 'ML FORGE provides stable, pinned versions of industry-standard architectures like YOLOv8, YOLOv10, and modern vision transformers. No silent updates—your architecture remains fixed until you decide otherwise.',
                    }
                ],
            },
            '/docs/validation/inference': {
                group: 'Validation',
                title: 'Live Inference',
                lede: 'Validate model behavior on live streams or video files directly within the IDE.',
                sections: [
                    {
                        title: 'Real-time Validation',
                        body: 'Run your trained weights on local camera feeds or test videos. The inference panel allows for real-time confidence thresholding and NMS tuning without redeploying code.',
                    }
                ]
            },
            '/docs/validation/benchmarks': {
                group: 'Validation',
                title: 'Benchmarking',
                lede: 'Statistically sound evaluation on held-out test sets.',
                sections: [
                    {
                        title: 'Precision-Recall Hub',
                        body: 'Generate full mAP curves, confusion matrices, and per-class performance metrics. ML FORGE ensures benchmarks are run on controlled environments for maximum scientific validity.',
                    }
                ]
            },
            '/docs/ide-reference': {
                group: 'Reference',
                title: 'IDE Reference',
                lede: 'Complete technical documentation for the ML FORGE interface and integrated tools.',
                sections: [
                    {
                        title: 'Workspace Panels',
                        body: 'A breakdown of the Project Explorer, Assets View, Metric Streamer, and Deployment Panel functionalities.',
                    }
                ],
            },
            '/docs/glossary': {
                group: 'Reference',
                title: 'Glossary',
                lede: 'Common terminology used within the ML FORGE ecosystem.',
                sections: [
                    {
                        title: 'Core Terms',
                        body: 'Definitions for Deterministic Pipelines, Dataset Snapshots, Vision IDE, and Label Lineage.',
                    }
                ]
            }
        }),
        []
    )

    const navGroups = useMemo(
        () => [
            {
                title: 'Overview',
                items: [
                    { title: 'What is ML FORGE?', href: '/docs/getting-started/what-is-mlforge' },
                    { title: 'Philosophy', href: '/docs/getting-started/philosophy' },
                ],
            },
            {
                title: 'Core Workflow',
                items: [
                    { title: 'Dataset Manager', href: '/docs/core-workflow/dataset-manager' },
                    { title: 'Annotation Studio', href: '/docs/core-workflow/annotation-studio' },
                    { title: 'Training Engine', href: '/docs/core-workflow/training-and-runs' },
                    { title: 'Training Logs', href: '/docs/core-workflow/training-logs' },
                ],
            },
            {
                title: 'Models',
                items: [
                    { title: 'Model Zoo', href: '/docs/model-zoo' }
                ],
            },
            {
                title: 'Validation',
                items: [
                    { title: 'Inference', href: '/docs/validation/inference' },
                    { title: 'Benchmarks', href: '/docs/validation/benchmarks' },
                ],
            },
            {
                title: 'Reference',
                items: [
                    { title: 'IDE Reference', href: '/docs/ide-reference' },
                    { title: 'Glossary', href: '/docs/glossary' },
                ],
            },
        ],
        []
    )

    const isIndex = path === '/docs' || path === '/docs/'
    const currentPage = pages[path]
    const fallbackPage = pages['/docs/getting-started/what-is-mlforge']

    return (
        <div className="docsTheme">
            <Helmet>
                <title>{isIndex ? 'Registry | ml forge Documentation' : `${(currentPage || fallbackPage).title} | ml forge Docs`}</title>
                <meta name="description" content={isIndex ? 'The unified documentation for ml forge Vision AI IDE. Build, audit, and ship workflows with deterministic precision.' : (currentPage || fallbackPage).lede} />
            </Helmet>
            <Navbar />

            
            <div className="docsWrapper">
                {!isIndex && (
                    <aside className="docsSidebar" aria-label="Documentation navigation">
                        {navGroups.map((group: any) => (
                            <div key={group.title} className="docsSidebar__group">
                                <div className="docsSidebar__groupTitle">{group.title}</div>
                                {group.items.map((item: any) => (
                                    <a
                                        key={item.href}
                                        className={`docsSidebar__link ${item.href === path ? 'docsSidebar__link--active' : ''}`}
                                        href={item.href}
                                        onClick={(e: any) => {
                                            e.preventDefault()
                                            navigate(item.href)
                                        }}
                                    >
                                        {item.title}
                                    </a>
                                ))}
                            </div>
                        ))}
                    </aside>
                )}

                <main className="docsMain">
                    {isIndex ? (
                        <>
                            <section className="docsIndexHero">
                                <div className="docsIndexHero__content">
                                    <h1 className="docsIndexHero__title">ML FORGE <br/> Registry</h1>
                                    <p className="docsIndexHero__subtitle">
                                        The unified documentation for the Vision AI IDE. <br/>
                                        Build, audit, and ship workflows with deterministic precision.
                                    </p>
                                    <div className="docsSearchContainer" role="search">
                                        <svg className="docsSearch__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                        <input
                                            className="docsSearch__input"
                                            type="search"
                                            placeholder="Search documentation..."
                                        />
                                    </div>
                                </div>
                                <div className="docsIndexHero__visual">
                                    <img src={heroVector} alt="ML FORGE Technical Vector Art" className="docsIndexHero__image" />
                                </div>
                            </section>

                            <div className="docsTopicGrid">
                                <a className="docsTopicCard" href="/docs/getting-started/what-is-mlforge" onClick={(e) => { e.preventDefault(); navigate('/docs/getting-started/what-is-mlforge') }}>
                                    <div className="docsTopicCard__header">
                                        <div className="docsTopicCard__kicker">Vision IDE</div>
                                        <div className="docsTopicCard__title">Getting Started</div>
                                    </div>
                                    <div className="docsTopicCard__body">Master the core concepts of local, deterministic vision workflows.</div>
                                </a>

                                <a className="docsTopicCard" href="/docs/core-workflow/dataset-manager" onClick={(e) => { e.preventDefault(); navigate('/docs/core-workflow/dataset-manager') }}>
                                    <div className="docsTopicCard__header">
                                        <div className="docsTopicCard__kicker">Data Engine</div>
                                        <div className="docsTopicCard__title">Dataset Manager</div>
                                    </div>
                                    <div className="docsTopicCard__body">Manage sources, snapshots, and classes with full audit trails.</div>
                                </a>

                                <a className="docsTopicCard" href="/docs/core-workflow/annotation-studio" onClick={(e) => { e.preventDefault(); navigate('/docs/core-workflow/annotation-studio') }}>
                                    <div className="docsTopicCard__header">
                                        <div className="docsTopicCard__kicker">Expert Labeling</div>
                                        <div className="docsTopicCard__title">Annotation Studio</div>
                                    </div>
                                    <div className="docsTopicCard__body">Professional multi-task labeling with integrated review cycles.</div>
                                </a>

                                <a className="docsTopicCard" href="/docs/core-workflow/training-and-runs" onClick={(e) => { e.preventDefault(); navigate('/docs/core-workflow/training-and-runs') }}>
                                    <div className="docsTopicCard__header">
                                        <div className="docsTopicCard__kicker">GPU Compute</div>
                                        <div className="docsTopicCard__title">Training Engine</div>
                                    </div>
                                    <div className="docsTopicCard__body">Local execution on your hardware with deep metrics introspection.</div>
                                </a>

                                <a className="docsTopicCard" href="/docs/model-zoo" onClick={(e) => { e.preventDefault(); navigate('/docs/model-zoo') }}>
                                    <div className="docsTopicCard__header">
                                        <div className="docsTopicCard__kicker">Architectures</div>
                                        <div className="docsTopicCard__title">Model Zoo</div>
                                    </div>
                                    <div className="docsTopicCard__body">Deterministic backbones pre-pinned for mission-critical vision tasks.</div>
                                </a>

                                <a className="docsTopicCard" href="/docs/ide-reference" onClick={(e) => { e.preventDefault(); navigate('/docs/ide-reference') }}>
                                    <div className="docsTopicCard__header">
                                        <div className="docsTopicCard__kicker">IDE Reference</div>
                                        <div className="docsTopicCard__title">Software Manual</div>
                                    </div>
                                    <div className="docsTopicCard__body">Technical breakdown of workspace panels and control surfaces.</div>
                                </a>
                            </div>
                        </>
                    ) : (
                        <article className="docsArticle">
                            <header className="docsArticle__header">
                                <div className="docsArticle__crumb">
                                    Documentation <span className="docsMetaDot" /> {(currentPage || fallbackPage).group}
                                </div>
                                <h1 className="docsArticle__title">{(currentPage || fallbackPage).title}</h1>
                                <p className="docsArticle__lede">{(currentPage || fallbackPage).lede}</p>
                            </header>

                            <div className="docsArticle__content">
                                {(currentPage || fallbackPage).sections.map((section: any, idx: number) => (
                                    <div key={idx} className="docsArticle__section">
                                        {section.title && <h2 className="docsH2">{section.title}</h2>}
                                        {section.body && <p className="docsP">{section.body}</p>}
                                        {section.image && (
                                            <div className="docsInsetImage">
                                                <img src={section.image} alt={section.caption || 'Documentation Visual'} />
                                                {section.caption && <p style={{ fontSize: '12px', color: 'var(--docs-text-muted)', marginTop: '12px', textAlign: 'center' }}>{section.caption}</p>}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </article>
                    )}
                </main>
            </div>
        </div>
    )
}

export default DocsPage
