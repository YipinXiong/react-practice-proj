import React, {PureComponent} from 'react';
import accountApiInstance from '../../apis/account-api-instance';
import {CACHE_ORG_ID_KEY} from '../../apis/api-const-tokens';
import {IMtPlanStat} from '../../interfaces/interfaces.index';
import RootStore from '@root-store';

export type Props = { rootStore: RootStore }

export interface IDashboardState {
    mtPlanStats: IMtPlanStat[];
    isLoading: boolean;
}

class Dashboard extends PureComponent<Props, IDashboardState> {
    constructor(props: { rootStore: RootStore }) {
        super(props);
        this.state = {mtPlanStats: [], isLoading: true}
    }

    componentDidMount() {
        const orgID = localStorage.getItem(CACHE_ORG_ID_KEY);
        accountApiInstance.get<IMtPlanStat[]>(`/orgs/${orgID}/mtPlanStats`)
            .then(({data: mtPlansStats}) => {
                this.setState({mtPlanStats: mtPlansStats, isLoading: false});
            });
    }

    shouldIBindThisInTypeScriptInReact(planStat: IMtPlanStat) {
        /* Playground */
        const mappedJobRoles = planStat.jobRoles?.map(({jobRoleID}) => {
            return this.props.rootStore.jobRolesStore.allJobRoles.find((storeJobRole) => jobRoleID === storeJobRole.jobRoleID)?.title;
        });
        console.log('jobRoles within the plan', mappedJobRoles);
    }

    render() {
        return (
            <>
                <h2>
                    here is dashboard
                </h2>
                {this.state.isLoading ?
                    <div className="text-danger fw-bold">Loading API...</div> :
                    <div data-testid="btn-wrapper" className="p-4 d-flex flex-wrap" style={{gap: '1rem'}}>
                        {this.state.mtPlanStats.map((planStat) => {
                            return <button key={planStat.plan.mtPlanID} className="btn btn-outline-info"
                                           onClick={() => this.shouldIBindThisInTypeScriptInReact(planStat)}>
                                {planStat.plan.title}</button>
                        })}
                    </div>}
            </>

        );
    }
}

export default Dashboard;
