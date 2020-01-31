### Grain

A big part of SourceCred’s vision is the desire to create project-specific cryptoassets, called "Grain" that represent contribution to or support of a project. These cryptoassets hold promise to make open-source projects financially sustainable which is currently an unsolved problem. You can read more about grain [here](concepts/grain.md).

#### Properties of Grain

 - Grain is always project-specific. For example, "SourceCred grain" and "Maker Community grain" would be wholly different assets.
 - Every week, new grain is created, or "harvested" by the project.
 - Most of the harvested grain goes to people that have directly worked on the project.
 - A fraction of the harvested grain flows to those who hold grain in the project’s dependencies. For example, if you have grain in Python, then you would continually earn a small share of NumPy’s grain, and so forth.
 - Grain is a freely transferrable and exchangeable asset. Most likely it will be implemented as an [ERC20 token](https://cointelegraph.com/explained/erc-20-tokens-explained), meaning that it can be bought or sold using the [0x Protocol 2](https://0x.org/).

#### How is Grain Acquired?

There are three ways to acquire grain in a project:

  - Contribute to the project directly.
  - Financially support the project (either directly, or by buying grain from a contributor)
  - Own grain in the project’s dependencies.


#### Grain as Proof of Support

In all of these cases, owning grain means that you've supported the project in some way: either via direct contribution, financial support, or by supporting a dependency. Therefore, grain is a proof of support for a project.

#### Rewards for Grainholders

How might an individual that holds grain be rewarded? There are several ideas.

 - Projects might provide prioritized attention to grain holders in feature requests, bugs, or other interactions warranting support.
 - Grain holders might have a say in project governance.
 - Crypto projects could even give tokens directly to grainholders. (For example, a cryptocurrency could direct 10% of its block reward to everyone who holds grain in the project itself.) **Note from @vsoch, I don't really understand this one**

Rewarding grainholders would be in the best interest of the project: if owning grain confers valuable rewards or access, then more people will want to buy it, increasing the price. This will mean a greater reward for the project’s developers, meaning more people will work on improving the project itself. The result will be a positive economic feedback cycle.

Another way of raising funds for grain-supported projects will be licensing along the lines of a Harberger Grain License 3, whereby proprietary dependencies of open projects will need to pay a tax, and the tax consists of buying and burning a project’s grain.

#### SourceGrain as Economic Scaffolding

Grain can serve a lot of economic functions for open-source projects:

 - It provides a new way to support an open-source project: by buying its grain.
 - It provides a way for contributors to earn money for their work: selling the grain they earn for contributing to the project.
 - It provides funding for widely-depended on open-source infrastructure: such projects will earn grain in all of their many dependencies.
 - It lets users of a project who need prioritized support or access to acquire it, by paying the developers.
 - It provides rewards for early investors in successful projects, both via grain appreciation, and via dividends from dependent projects.

And in this light, you can think of grain as as producing general-purpose economic infrastructure for open-source projects. It would not be inaccurate to say that SourceCred exists so that grain can be a reality.

#### In the wild

[Here](https://github.com/sourcecred/sourcecred/issues/1425) is an example of an issue 
discussing grain in context of the sourcecred software, and [here](https://observablehq.com/@decentralion/credsperiment-week-16) is an observablehq notebook that shows how
grain works in the current "cred-speriment."

#### References

 - [Grain on sourcecred discourse](https://discourse.sourcecred.io/t/grain-a-project-specific-cred-powered-token/147)
 - [sourcegrain by @decentralion](https://github.com/sourcegrain/mission)
